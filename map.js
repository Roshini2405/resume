mvn archetype:generate -DgroupId=com.example.demo \
-DartifactId=SampleProject \
-DarchetypeArtifactId=maven-archetype-quickstart \
-DinteractiveMode=false

src/main/java/com/example/demo/App.java

pom.xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example.demo</groupId>
    <artifactId>SampleProject</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>SampleProject</name>
    <url>http://maven.apache.org</url>

    <dependencies>

        <!-- External Library -->
        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.10.1</version>
        </dependency>

        <!-- JUnit Test -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>

    </dependencies>

    <build>
        <plugins>

            <!-- Fix Java version -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.10.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>

            <!-- For mvn exec:java -->
            <plugin>
                <groupId>org.codehaus.mojo</groupId>
                <artifactId>exec-maven-plugin</artifactId>
                <version>3.1.0</version>
                <configuration>
                    <mainClass>com.example.demo.App</mainClass>
                </configuration>
            </plugin>

        </plugins>
    </build>

</project>
package com.example.demo;

import com.google.gson.Gson;

public class App {
    public static void main(String[] args) {
        Gson gson = new Gson();

        Person p = new Person("Srika", 24);
        String jsonData = gson.toJson(p);

        System.out.println("Converted to JSON: " + jsonData);
    }
}

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
package com.example.demo;

import junit.framework.TestCase;
import com.google.gson.Gson;

public class AppTest extends TestCase {

    // Test if Gson converts the Person object to JSON correctly
    public void testJsonConversion() {
        Gson gson = new Gson();
        Person p = new Person("Srika", 24);

        String json = gson.toJson(p);

        // Expected JSON
        String expected = "{\"name\":\"Srika\",\"age\":24}";

        assertEquals(expected, json);
    }

    // Test if Person object stores values correctly
    public void testPersonValues() {
        Person p = new Person("Srika", 24);

        assertEquals("Srika", p.name);
        assertEquals(24, p.age);
    }
}
mvn exec:java

