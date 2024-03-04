# Observer

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

## Key Points

-   The observer pattern is a behavioral design pattern.
-   The observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
-   The observer pattern is used when a change to one object requires changing others, and you don't know how many objects need to be changed.
-   The observer pattern is used when an object should be able to notify other objects without making assumptions about who these objects are.

## Use Cases

-   When an object should be able to notify other objects without making assumptions about who these objects are.
-   When a change to one object requires changing others, and you don't know how many objects need to be changed.
-   When an object should be able to notify other objects without making assumptions about who these objects are.

## Class Diagram

```
 +----------------------+         +---------------+
 |    Subject           |<>-------|   Observer    |
 +----------------------+         +---------------+
 | -observers           |         | #update()     | <--------|
 +----------------------+         +---------------+          |
 | +attach(o:Observer)  |               ^                    |
 | +detach(o:Observer)  |               |                    |
 | +notifyObservers()   |      +----------------+   +-------------------+
 +----------------------+      |ConcreteObserver|   |ConcreteObserver N |
                               +----------------+   +-------------------+
                               | #update()      |   | #update()         |
                               +----------------+   +-------------------+
```

## Example

-   Scenario:
    -   A weather station is the subject.
    -   Weather stations have multiple displays that show the current weather conditions.
    -   The displays are the observers.
    -   When the weather station's data changes, all the displays should be updated.

```java

import java.util.ArrayList;
import java.util.List;

public class Main {

    static interface Observer {
        void update(float temperature, float humidity, float pressure);
    }

    static interface Subject {
        void registerObserver(Observer observer);
        void removeObserver(Observer observer);
        void notifyObservers();
    }

    static class WeatherData implements Subject {
        private List<Observer> observers;
        private float temperature;
        private float humidity;
        private float pressure;

        public WeatherData() {
            observers = new ArrayList<>();
        }

        @Override
        public void registerObserver(Observer observer) {
            observers.add(observer);
        }

        @Override
        public void removeObserver(Observer observer) {
            observers.remove(observer);
        }

        @Override
        public void notifyObservers() {
            for (Observer observer : observers) {
                observer.update(temperature, humidity, pressure);
            }
        }

        public void measurementsChanged() {
            notifyObservers();
        }

        public void setMeasurements(float temperature, float humidity, float pressure) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            measurementsChanged();
        }
    }

    static class CurrentConditionsDisplay implements Observer {
        private float temperature;
        private float humidity;
        private Subject weatherData;

        public CurrentConditionsDisplay(Subject weatherData) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this);
        }

        @Override
        public void update(float temperature, float humidity, float pressure) {
            this.temperature = temperature;
            this.humidity = humidity;
            display();
        }

        public void display() {
            System.out.println("Current conditions: " + temperature + "F degrees and " + humidity + "% humidity");
        }
    }

    public static void main(String[] args) {
        WeatherData weatherData = new WeatherData();
        CurrentConditionsDisplay currentDisplay = new CurrentConditionsDisplay(weatherData);
        weatherData.setMeasurements(80, 65, 30.4f);
        weatherData.setMeasurements(82, 70, 29.2f);
        weatherData.setMeasurements(78, 90, 29.2f);
    }

}

```
