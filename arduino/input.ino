#if ! (ESP8266 || ESP32 )
  #error This code is intended to run on the ESP8266/ESP32 platform! Please check your Tools->Board setting // insert
#endif

#define MYSQL_DEBUG_PORT      Serial //insert
#define _MYSQL_LOGLEVEL_      1 //Insert

#define sensorUmid1 32
#define sensorUmid2 35
#define sensorUmid3 34

#include <OneWire.h> //temp
#include <DallasTemperature.h> //temp
#include <MySQL_Generic.h> //insert

#define USING_HOST_NAME     false

#if USING_HOST_NAME
  char server[] = "localhost";
#else
  IPAddress server(192, 168, 137, 1);
#endif

uint16_t server_port = 3306;

char default_database[] = "tcc";
char default_table[]    = "sensor_leitura";

String default_value    = "Hello, Arduino!";

MySQL_Connection conn((Client *)&client);

MySQL_Query *query_mem;

const int oneWireBus = 4; //temp

char ssid[]         = "tcc"; //insert
char pass[]         = "12345678"; // insert 
char user[]         = "douglas.avanti"; //insert 
char password[]     = "!.Qlvv]ZqMO.]GZ2"; //insert 

OneWire oneWire(oneWireBus); //temp

DallasTemperature sensors(&oneWire); //temp


void setup() {
  Serial.begin(115200);
  while (!Serial && millis() < 5000);

  MYSQL_DISPLAY1("\nStarting Basic_Insert_ESP on", ARDUINO_BOARD);
  MYSQL_DISPLAY(MYSQL_MARIADB_GENERIC_VERSION);

  MYSQL_DISPLAY1("Connecting to", ssid);
  
  WiFi.begin(ssid, pass);

  while (WiFi.status() != WL_CONNECTED) 
  {
    delay(500);
    MYSQL_DISPLAY0(".");
  }

  MYSQL_DISPLAY1("Connected to network. My IP address is:", WiFi.localIP());

  MYSQL_DISPLAY3("Connecting to SQL Server @", server, ", Port =", server_port);
  MYSQL_DISPLAY5("User =", user, ", PW =", password, ", DB =", default_database);

  sensors.begin();
}

void runInsert(){
  sensors.requestTemperatures(); 
  float temperatureC = sensors.getTempCByIndex(0);
  float umid1;
  float umid2;
  float umid3;

  umid1 = map(analogRead(sensorUmid1), 0, 4095, 100, 0);
  if(umid1>=55)
  {
    umid1=100;
  } 
  else if(umid1>1)
  {
   umid1=(umid1/55)*100;
  } else if (umid1=1) {
    umid1=0;
  }

  umid2 = map(analogRead(sensorUmid2), 0, 4095, 100, 0);
 if(umid2>=58)
 {
  umid2=100;
 } 
  else if(umid2>1)
  {
  umid2=(umid2/58)*100;
  }else if (umid2=1){
  umid2=0;
 }

  umid3 = map(analogRead(sensorUmid3), 0, 4095, 100, 0);
  if(umid3>=53)
  {
    umid3=100;
  } 
  else if(umid3>1)
  {
    umid3=(umid3/53)*100;
  }else if (umid3=1){
    umid3=0;
  }
  
  String INSERT_SQL = String("INSERT INTO ") + default_database + "." + default_table + " (sensor_id, leitura_valor) VALUES (4, "+temperatureC + ");INSERT INTO " + default_database + "." + default_table + " (sensor_id, leitura_valor) VALUES (1, "+umid1 + ");INSERT INTO " + default_database + "." + default_table + " (sensor_id, leitura_valor) VALUES (2, "+umid2 + ");INSERT INTO " + default_database + "." + default_table + " (sensor_id, leitura_valor) VALUES (3, "+umid3 + ")";
  
  MySQL_Query query_mem = MySQL_Query(&conn);

  if (conn.connected())
  {
    MYSQL_DISPLAY(INSERT_SQL);
    // Execute the query
    // KH, check if valid before fetching
    if ( !query_mem.execute(INSERT_SQL.c_str()) )
    {
      MYSQL_DISPLAY("Insert error");
    }
    else
    {
      MYSQL_DISPLAY("Data Inserted.");
    }
  }
  else
  {
    MYSQL_DISPLAY("Disconnected from Server. Can't insert.");
  }

  MYSQL_DISPLAY("Connecting...");
  
  //if (conn.connect(server, server_port, user, password))
  if (conn.connectNonBlocking(server, server_port, user, password) != RESULT_FAIL)
  {
    delay(500);
    runInsert();
    conn.close();                     // close the connection
  } 
  else 
  {
    MYSQL_DISPLAY("\nConnect failed. Trying again on next iteration.");
  }

  MYSQL_DISPLAY("\nSleeping...");
  MYSQL_DISPLAY("================================================");

}

void loop() {
  runInsert();
  delay(5000);
}