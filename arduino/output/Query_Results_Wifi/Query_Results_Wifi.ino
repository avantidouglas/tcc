#include "defines.h"
#include "Credentials.h"
#include <MySQL_Generic.h>
#include <iostream>

#define bomba1 14

String medidas;
String bomba_ativa;
String intervalo;
String umidade;
String vazao;
String temp_max;
String temp_lido;

float num_intervalo;
float num_vazao;
float num_umidade;
float num_medidas;
float num_bomba_ativa;
float vazao_final;
float num_temp_max;
float num_temp_lido;

#define USING_HOST_NAME     false

#if USING_HOST_NAME
  char server[] = "your_account.ddns.net";
#else
  IPAddress server(192, 168, 137, 1);
#endif

uint16_t server_port = 3306;

const char query[] = "select tudo.leitura_valor as '0', tudo.bomba_ativa as '1', tudo.bomba_intervalo as '2', tudo.bomba_umidade_max as '3', tudo.bomba_tempo_vazao as '4', tudo.temperatura_max as '5', teste.leitura_valor as '6' from (select leitura_valor, bomba_ativa, bomba_intervalo, bomba_umidade_max, bomba_tempo_vazao, t4.temperatura_max from tcc.sensor as t1 join tcc.sensor_leitura as t2 on t1.id = t2.sensor_id join tcc.bomba as t3 on t1.id = t3.sensor_id join tcc.temperatura_config as t4 on t4.id = 1 where t1.id = 3 order by leitura_data desc limit 1) as tudo join tcc.sensor_leitura as teste on teste.sensor_id = 4 order by teste.leitura_data desc limit 1 ";

MySQL_Connection conn((Client *)&client);

void setup()
{
  Serial.begin(115200);
  while (!Serial && millis() < 5000);

  MYSQL_DISPLAY1("\nStarting Query_Results_WiFi on", BOARD_NAME);
  MYSQL_DISPLAY(MYSQL_MARIADB_GENERIC_VERSION);

#if ( USING_WIFI_ESP8266_AT  || USING_WIFIESPAT_LIB ) 
  #if ( USING_WIFI_ESP8266_AT )
    MYSQL_DISPLAY("Using ESP8266_AT/ESP8266_AT_WebServer Library");
  #elif ( USING_WIFIESPAT_LIB )
    MYSQL_DISPLAY("Using WiFiEspAT Library");
  #endif
  
  EspSerial.begin(115200);
  WiFi.init(&EspSerial);

  MYSQL_DISPLAY(F("WiFi shield init done"));
  if (WiFi.status() == WL_NO_SHIELD)
  {
    MYSQL_DISPLAY(F("WiFi shield not present"));
    while (true);
  }
#endif

  // Begin WiFi section
  MYSQL_DISPLAY1("Connecting to", ssid);

  WiFi.begin(ssid, pass);
  
  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(500);
    MYSQL_DISPLAY0(".");
  }

  // print out info about the connection:
  MYSQL_DISPLAY1("Connected to network. My IP address is:", WiFi.localIP());

  MYSQL_DISPLAY3("Connecting to SQL Server @", server, ", Port =", server_port);
  MYSQL_DISPLAY3("User =", user, ", PW =", password);
  pinMode(bomba1, OUTPUT);
}

void loop()
{
  MYSQL_DISPLAY("Connecting...");
  if (conn.connectNonBlocking(server, server_port, user, password) != RESULT_FAIL)
  {
  delay(500);

  MySQL_Query query_mem = MySQL_Query(&conn);

  if ( !query_mem.execute(query) )
  {
    MYSQL_DISPLAY("Querying error");
    return;
  }

  column_names *cols = query_mem.get_columns();
  
  MYSQL_DISPLAY();

  row_values *row = NULL;

  do
  {
    row = query_mem.get_next_row();

    if (row != NULL)
    {
      for (int f = 0; f < cols->num_fields; f++)
      {
        if(f == 0){
          medidas = row->values[f];
        }

        if(f == 1){
          bomba_ativa = row->values[f];
        }

        if(f == 2){
          intervalo = row->values[f];
        }

        if(f == 3){
          umidade = row->values[f];
        }

        if(f == 4){
          vazao = row->values[f];
        }

        if(f == 5){
          temp_max = row->values[f];
        }

        if(f == 6){
          temp_lido = row->values[f];
        }
      }

      MYSQL_DISPLAY();
    }
  } while (row != NULL);
    conn.close();
  } 
  else 
  {
    MYSQL_DISPLAY("\nConnect failed. Trying again on next iteration.");
  }

  MYSQL_DISPLAY("\nFim do ciclo...");

  num_bomba_ativa = bomba_ativa.toFloat();
  num_intervalo = intervalo.toFloat();
  num_vazao = vazao.toFloat();
  num_umidade = umidade.toFloat();
  num_medidas = medidas.toFloat();
  num_temp_max = temp_max.toFloat();
  num_temp_lido = temp_lido.toFloat();
  
  if(num_medidas <= num_umidade){
    if(num_bomba_ativa == 1){
      if(num_umidade == 0){
        num_umidade = 1;
      }

      MYSQL_DISPLAY(vazao + "---" + num_umidade + "---" + num_intervalo + "---" + bomba_ativa + "---" + medidas);
      vazao_final = num_vazao - (num_vazao*num_medidas/num_umidade);

      if(num_temp_lido >= num_temp_max){
        vazao_final = vazao_final + (vazao_final/2);
      }

      Serial.print(vazao_final);
      digitalWrite(bomba1, LOW);
      delay(vazao_final*1000);
      digitalWrite(bomba1, HIGH);
      }
    }
    delay(num_intervalo);
}