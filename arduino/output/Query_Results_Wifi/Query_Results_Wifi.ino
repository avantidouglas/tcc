#include "defines.h"
#include "Credentials.h"
#include <MySQL_Generic.h>

#define USING_HOST_NAME     false

#if USING_HOST_NAME
  char server[] = "your_account.ddns.net";
#else
  IPAddress server(192, 168, 0, 20);
#endif

uint16_t server_port = 3306;    //3306;

// Sample query
const char query[] = "SELECT * FROM tcc.bomba where id = 1";

MySQL_Connection conn((Client *)&client);

void setup()
{
  Serial.begin(115200);
  while (!Serial && millis() < 5000); // wait for serial port to connect

  MYSQL_DISPLAY1("\nStarting Query_Results_WiFi on", BOARD_NAME);
  MYSQL_DISPLAY(MYSQL_MARIADB_GENERIC_VERSION);

  // Remember to initialize your WiFi module
#if ( USING_WIFI_ESP8266_AT  || USING_WIFIESPAT_LIB ) 
  #if ( USING_WIFI_ESP8266_AT )
    MYSQL_DISPLAY("Using ESP8266_AT/ESP8266_AT_WebServer Library");
  #elif ( USING_WIFIESPAT_LIB )
    MYSQL_DISPLAY("Using WiFiEspAT Library");
  #endif
  
  // initialize serial for ESP module
  EspSerial.begin(115200);
  // initialize ESP module
  WiFi.init(&EspSerial);

  MYSQL_DISPLAY(F("WiFi shield init done"));

  // check for the presence of the shield
  if (WiFi.status() == WL_NO_SHIELD)
  {
    MYSQL_DISPLAY(F("WiFi shield not present"));
    // don't continue
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
}

void runQuery()
{
  MYSQL_DISPLAY("\nRunning SELECT and printing results");
  MYSQL_DISPLAY(query);

  // Initiate the query class instance
  MySQL_Query query_mem = MySQL_Query(&conn);

  // Execute the query

  // KH, check if valid before fetching
  if ( !query_mem.execute(query) )
  {
    MYSQL_DISPLAY("Querying error");
    return;
  }
  //////

  // Fetch the columns and print them
  column_names *cols = query_mem.get_columns();

  for (int f = 0; f < cols->num_fields; f++)
  {
    MYSQL_DISPLAY0(cols->fields[f]->name);

    if (f < cols->num_fields - 1)
    {
      MYSQL_DISPLAY0(", ");
    }
  }
  
  MYSQL_DISPLAY();
  
  // Read the rows and print them
  row_values *row = NULL;

  do
  {
    row = query_mem.get_next_row();

    if (row != NULL)
    {
      for (int f = 0; f < cols->num_fields; f++)
      {
        MYSQL_DISPLAY0(row->values[f]);

        if (f < cols->num_fields - 1)
        {
          MYSQL_DISPLAY0(", ");
        }
      }

      MYSQL_DISPLAY();
    }
  } while (row != NULL);
}

void loop()
{
  MYSQL_DISPLAY("Connecting...");
  
  //if (conn.connect(server, server_port, user, password))
  if (conn.connectNonBlocking(server, server_port, user, password) != RESULT_FAIL)
  {
    delay(500);
    runQuery();
    conn.close();                     // close the connection
  } 
  else 
  {
    MYSQL_DISPLAY("\nConnect failed. Trying again on next iteration.");
  }

  MYSQL_DISPLAY("\nSleeping...");
  MYSQL_DISPLAY("================================================");
 
  delay(60000);
}