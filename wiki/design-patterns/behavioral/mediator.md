# Mediator

The mediator pattern is a behavioral design pattern that defines an object that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program's running behavior.

## Key Points

-   The mediator pattern is a behavioral design pattern.
-   The mediator pattern defines an object that encapsulates how a set of objects interact.
-   The mediator pattern is used to reduce coupling between classes that communicate with each other.
-   The mediator pattern is used when a set of objects communicate in well-defined but complex ways.
-   The mediator pattern is used when reusing an object is difficult because it refers to many other objects and these objects refer to it.

## Use Cases

-   Reduce coupling between classes that communicate with each other.
-   Reduce chaotic dependencies between classes.
-   Encapsulate complex communication between a set of objects.
-   Reuse an object that refers to many other objects and these objects refer to it.

## Class Diagram

```
             +-------------------+
             | <<interface>>     |
             | Mediator          |
             +-------------------+
             | + send(message,   |
             |   colleague)      |
             +-------------------+
                        ^
                        |
                        | implements
                        |
             +-------------------+
             | ConcreteMediator  |
             +-------------------+
             | + send(message,   |
             |   colleague)      |
             +-------------------+
             | - colleague1      |
             | - colleague2      |
             +-------------------+
                    /      \
                   /        \
                  /          \
       +-------------------+    +-------------------+
       | Colleague1        |    | Colleague2        |
       +-------------------+    +-------------------+
       | - mediator        |    | - mediator        |
       +-------------------+    +-------------------+
       | + send(message)   |    | + send(message)   |
       | + receive(message)|    | + receive(message)|
       +-------------------+    +-------------------+

```

## Example

-   Scenario:
    -   A chat room is the mediator.
    -   Users are the colleagues.
    -   Users can send messages to the chat room, and the chat room will broadcast the message to all users.
    -   Users can send private messages to other users, and the chat room will deliver the message to the intended user.

```java

import java.util.ArrayList;
import java.util.List;

public class Main {

    static interface Mediator {
        void sendMessage(String message, Colleague colleague);
    }

    static class ChatRoom implements Mediator {
        private List<Colleague> colleagues;

        public ChatRoom() {
            colleagues = new ArrayList<>();
        }

        public void addColleague(Colleague colleague) {
            colleagues.add(colleague);
        }

        @Override
        public void sendMessage(String message, Colleague colleague) {
            for (Colleague c : colleagues) {
                if (c != colleague) {
                    c.receiveMessage(message);
                }
            }
        }
    }

    static abstract class Colleague {
        protected Mediator mediator;

        public Colleague(Mediator mediator) {
            this.mediator = mediator;
        }

        public void sendMessage(String message) {
            mediator.sendMessage(message, this);
        }

        public abstract void receiveMessage(String message);
    }

    static class User extends Colleague {
        private String name;

        public User(String name, Mediator mediator) {
            super(mediator);
            this.name = name;
        }

        @Override
        public void receiveMessage(String message) {
            System.out.println(name + " received: " + message);
        }
    }

    public static void main(String[] args) {
        ChatRoom chatRoom = new ChatRoom();
        User user1 = new User("User 1", chatRoom);
        User user2 = new User("User 2", chatRoom);
        User user3 = new User("User 3", chatRoom);
        chatRoom.addColleague(user1);
        chatRoom.addColleague(user2);
        chatRoom.addColleague(user3);
        user1.sendMessage("Hello, everyone!");
        user2.sendMessage("Hi, User 1!");
        user3.sendMessage("Hey, User 1!");
    }
}

```
