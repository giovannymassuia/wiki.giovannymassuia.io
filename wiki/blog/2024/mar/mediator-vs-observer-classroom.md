---
comment: true
---

# Demystifying Design Patterns: Mediator vs. Observer Through a Classroom Analogy

Understanding design patterns is crucial for software developers, as they provide proven solutions to common problems in software design. Among the myriad of patterns, the Mediator and Observer patterns stand out for their unique approaches to facilitating communication between objects. To shed light on these patterns, let's use a classroom setting as an analogy, making the abstract concepts more accessible and relatable.

## The Classroom Scene

Imagine a classroom, a dynamic environment where communication flows in various forms. In this bustling space, the teacher plays a pivotal role in managing interactions, ensuring that messages are conveyed efficiently and effectively. This setting mirrors the complexities of software systems, where different components need to interact without becoming entangled in dependencies.

## Mediator Pattern: The Teacher as a Facilitator

In the Mediator pattern, the teacher acts as a central figure who orchestrates communication within the classroom. Rather than students addressing issues directly among themselves, potentially leading to confusion or conflict, they channel their communications through the teacher. The teacher then processes these messages and takes appropriate action, ensuring a structured and harmonious classroom environment.

### Sending a Note

Imagine a scenario where Student 1 encounters an issue in the classroom, such as discomfort due to the room's temperature or a need for additional resources. Instead of voicing their concern directly or attempting to resolve the matter on their own, Student 1 writes a note detailing their complaint and hands it to the teacher. Acting as the mediator, the teacher reviews the note and decides on the best course of action, whether it's adjusting the thermostat, providing additional materials, or addressing a broader issue within the classroom setup.

This method of communication via the mediator (teacher) ensures that the students' concerns are addressed effectively without direct confrontation or the need for students to manage the logistics themselves. It highlights the Mediator pattern's strength in managing interactions and resolving issues within a system, ensuring that each component (student) operates smoothly without needing to directly manage or negotiate with other components.

## Observer Pattern: The Teacher's Announcement

Contrastingly, the Observer pattern is akin to the teacher making an announcement to the entire class. When the teacher has information that needs to be shared with everyone, they address the class as a whole. Each student (observer) listens and takes note of the announcement, reacting according to its relevance to them. This broadcast method is efficient for disseminating information widely without direct, individual communication.

### A Whisper to the Music Group

Taking this a step further, imagine a scenario where Student 1 needs to convey a message specifically to the members of the music group within the class. Instead of making a broad announcement, the student informs the teacher, who then "whispers" the message to the music group members. This targeted broadcasting reflects the Observer pattern's ability to notify specific observers about an event or message, ensuring that only the interested or affected parties are informed.

## Reflection

The Mediator and Observer patterns offer elegant solutions for managing communication in software systems, akin to the teacher's role in a classroom. The Mediator pattern, with its direct and controlled communication method, is like passing notes through a teacher, ensuring privacy and order. On the other hand, the Observer pattern, with its ability to broadcast messages selectively, is like a teacher's announcement or a whisper to a specific group, efficiently notifying all relevant parties.

Through the lens of a classroom analogy, we can appreciate the distinct mechanisms and applications of these design patterns, highlighting their importance in creating maintainable and decoupled software architectures. Understanding when and how to employ these patterns can greatly enhance a developer's ability to design robust and scalable systems.

## Key Points for the Mediator Pattern

-   **Centralized Control**: The Mediator pattern centralizes communication through a single mediator entity, akin to the teacher in the classroom who facilitates all communication.
-   **Reduced Coupling**: By acting as the sole point of communication, the mediator reduces direct dependencies among objects (students), leading to a more decoupled system.
-   **Direct Communication**: The pattern is well-suited for scenarios where messages need to be directed specifically from one object to another, similar to passing a note through the teacher to a specific student.
-   **Complexity Management**: The mediator can simplify the communication between many objects, managing the complexity and flow of interaction.

## Key Points for the Observer Pattern

-   **Broadcast Communication**: The Observer pattern allows subjects to broadcast messages to multiple observers, similar to a teacher making an announcement to the entire class or a specific group.
-   **Dynamic Subscription**: Observers can subscribe or unsubscribe to subjects dynamically, allowing for flexibility in which events they are notified about, akin to students choosing which club announcements they want to hear.
-   **Indirect Interaction**: This pattern promotes indirect interaction between objects, where observers react to subjects' notifications without direct references, maintaining a level of decoupling.
-   **Selective Notification**: While inherently a broadcast mechanism, the Observer pattern can also be used for selective notification, as demonstrated by the whisper to the music group, where only a subset of observers receive the message.

## Similarities and Differences

-   **Similarity in Reducing Coupling**: Both patterns aim to reduce coupling between objects, making the system more modular and easier to maintain.
-   **Difference in Communication Flow**: The Mediator pattern often involves direct, one-to-one (or one-to-few) communication, while the Observer pattern inherently supports one-to-many broadcasting.
-   **Control vs. Freedom**: The Mediator pattern centralizes control of communication, potentially becoming a bottleneck or point of complexity. In contrast, the Observer pattern gives more freedom to objects to subscribe to or broadcast messages as needed, potentially leading to a more dynamic and flexible system.
-   **Usage Context**: The Mediator is ideal for structured and controlled communication scenarios, whereas the Observer suits situations where information needs to be disseminated to multiple interested parties without specifying individual recipients.

## A bit of code

Let's take a look at how these patterns might be implemented in a simple Java program.

### Mediator Pattern Example: Passing a Note

```java
public class ClassroomMediatorExample {

    public class ClassroomMediatorExample {

    interface Mediator {
        void handleNote(String noteType, String content, Student student);
    }

    static class Teacher implements Mediator {
        @Override
        public void handleNote(String noteType, String content, Student student) {
            System.out.println("Handling " + noteType + " from " + student.getName() + ": " + content);
            // Logic to determine and invoke the appropriate handler based on the noteType and content
        }
    }

    static class Student {
        private String name;
        private Mediator mediator;

        public Student(String name, Mediator mediator) {
            this.name = name;
            this.mediator = mediator;
        }

        public String getName() {
            return name;
        }

        public void sendNote(String noteType, String content) {
            System.out.println(this.name + " sends a " + noteType + ": " + content);
            mediator.handleNote(noteType, content, this);
        }
    }

    public static void main(String[] args) {
        Teacher teacher = new Teacher();
        Student student1 = new Student("Student 1", teacher);

        student1.sendNote("complaint", "It's too cold in the classroom.");
    }
}
```

### Observer Pattern Example: Teacher's Announcement

```java
public class ClassroomObserverExample {

    interface Subject {
        void subscribe(Observer observer);
        void unsubscribe(Observer observer);
        void notifyObservers(String message);
    }

    interface Observer {
        void update(String message);
    }

    static class Teacher implements Subject {
        private List<Observer> musicGroupMembers = new ArrayList<>();

        @Override
        public void subscribe(Observer observer) {
            musicGroupMembers.add(observer);
        }

        @Override
        public void unsubscribe(Observer observer) {
            musicGroupMembers.remove(observer);
        }

        @Override
        public void notifyObservers(String message) {
            for (Observer member : musicGroupMembers) {
                member.update(message);
            }
        }
    }

    static class Student implements Observer {
        private String name;

        public Student(String name) {
            this.name = name;
        }

        @Override
        public void update(String message) {
            System.out.println(name + " hears a whisper: " + message);
        }
    }

    public static void main(String[] args) {
        Teacher teacher = new Teacher();
        Student musicMember1 = new Student("Music Member 1");
        Student musicMember2 = new Student("Music Member 2");

        teacher.subscribe(musicMember1);
        teacher.subscribe(musicMember2);

        teacher.notifyObservers("Music practice is postponed to next week.");
    }
}
```

## More to Explore

-   [Observer Pattern](/wiki/design-patterns/behavioral/observer)
-   [Mediator Pattern](/wiki/design-patterns/behavioral/mediator)
