<!-- Slide 1 -->

# Module 4 - Programming and Application Basics

---

<!-- Slide 2 -->

# Programming Languages Fundamentals

---

<!-- Slide 3 -->

# Programming language

**Definition**

-   Set of instructions that control the behavior of a machine
-   Foundation of software development
-   Used to implement algorithms and programs

**Purpose**

-   Enables developers to communicate with computers
-   Provides a way to express logical procedures and computational tasks

---

<!-- Slide 4 -->

# Types of Programming Languages

**Procedural**

-   programs are written as a series of instructions or procedures

**Object-Oriented (OOP)**

-   Based on the concept of "objects", which can contain data and code to manipulate the data

**Functional**

-   Emphasize the evaluation of functions and avoid changing state or mutable data

**Multi-Paradigm**

-   Combines two or more paradigms

---

<!-- Slide 5 -->

# Computer Languages Paradigms

**Imperative Paradigm**

-   Describes how a program operates by changing its state through statements and commands

**Declarative Paradigm**

-   Focuses on what the program should accomplish without explicitly stating how to do it

---

<!-- Slide 6 -->

# Popular Programming Languages

| Language | Year | Inventor/Organization |
| --- | --- | --- |
| C | 1972 | Dennis Ritchie (AT&T Bell Labs) |
| SQL | 1974 | Donald D. Chamberlin, Raymond F. Boyce (IBM) |
| C++ | 1985 | Bjarne Stroustrup |
| Erlang | 1986 | Ericsson |
| Haskell | 1990 | Committee on Functional Programming |
| Python | 1991 | Guido van Rossum |
| Java | 1995 | James Gosling (Sun Microsystems) |
| Ruby | 1995 | Yukihiro "Matz" Matsumoto |
| JavaScript | 1995 | Brendan Eich (Netscape) |
| C# | 2000 | Microsoft |
| Go (Golang) | 2009 | Google |
| Rust | 2010 | Mozilla Foundation |
| Swift | 2014 | Apple |
| Kotlin | 2016 | JetBrains and Google |

---

<!-- Slide 7 -->

# Low-Level and High-Level Languages

**Low-Level Programming Languages**

-   Focus on low-level programming and hardware manipulation
-   Closer to machine code
-   Giving direct control over hardware
-   Provide more detailed management of system resources (e.g. memory and CPU)
-   Examples: Assembly, Machine Language

**High-Level Programming Languages**

-   Emphasis on portability, readability, and developer efficiency
-   Abstracted from machine code
-   Focus easy maintenance
-   Examples: C, C++, Java, C#, Python

---

<!-- Slide 8 -->

# Execution Models (Compilation vs Interpretation)

**Compiled to Machine Code (Native Executable)**

-   Translated directly into machine code
-   Specific to the target CPU
-   Runs without needing any external environment

**Compiled to Bytecode**

-   First compiled into an intermediate bytecode
-   Bytecode runs on a virtual machine (VM)
-   Requires additional VM program
-   Interpret into machine code at runtime
-   Allows platform independence

**Interpreted**

-   Requires an interpreter program
-   Executed line-by-line by an interpreter
-   Offer flexibility but typically run slower

---

<!-- Slide 9 -->

# Common Programming Language Concepts

**Syntax**

-   Rules and structure that define how code must be written
-   Ensures code is readable and can be executed by the compiler or interpreter

**Variables and Data Types**

-   Variables: Containers for storing data values
-   Data Types: Defines the type of data that can be stored and manipulated

**Control Structures**

-   Conditionals: (if-else, switch) Used to make decisions in code
-   Loops: (for, while) Enable repetitive execution of code blocks

**Functions/Methods**

-   Blocks of reusable code designed to perform specific tasks.
-   Can accept parameters and return values.

---

<!-- Slide 10 -->

# Common Programming Language Concepts (cont.)

**Operators**

-   Arithmetic Operators: Perform mathematical operations (+, -, \*, /)
-   Comparison Operators: Compare values (==, !=, <, >, <=, >=)
-   Logical Operators: Perform logical operations (&&, ||, !)
-   Assignment Operators: Assign values to variables (=, +=, -=, etc.)

**Memory Management**

-   Handles the allocation and deallocation of memory
-   Automatic via garbage collection or manual via pointers

**Iterators and Generators**

-   Iterators: Allows traverse through all elements of a collection without using explicit indexing
-   Generators: Functions yield values one at a time, providing memory-efficient iteration over large data sets

---

<!-- Slide 11 -->

# Common Programming Language Concepts (cont.)

**Error Handling**

-   Mechanisms to manage errors or exceptions that occur during execution

**Object-Oriented Programming (OOP)**

-   Organizes code into objects that contain both data (attributes, properties) and functions (methods)
-   Concepts include classes, inheritance, polymorphism, encapsulation

**Concurrency**

-   The ability of a program to handle multiple tasks at the same time
-   Can be achieved through parallelism or asynchronous programming

---

<!-- Slide 12 -->

# Parallelism vs Asynchronous Paradigms

**Problem**

-   Traditional programming executes tasks sequentially, one after the other.
-   This approach leads to inefficiency, especially in:
    -   CPU-bound tasks: Heavy computations that take up a lot of processing time.
    -   I/O-bound tasks: Operations that involve waiting (e.g., file access, network requests).

**Solution**

-   Parallelism
    -   Allows executing multiple tasks simultaneously
    -   Maximises CPU usage for computation-heavy operations.
-   Asynchronous programming
    -   Enables handling I/O-bound tasks efficiently
    -   Prevents the system from idling while waiting for slow operations.

---

<!-- Slide 13 -->

# Environment Variables

**Definition**

-   Key-value pairs
-   Used by applications for configuration settings
-   Can affect how processes run
-   External configuration without hardcoding values in the application

**Characteristics**

-   Stored at the operating system level
-   Accessible by applications running on that system
-   Commonly used for storing sensitive information like credentials
-   Can vary based on environment (e.g., development, testing, production)

**Advantages**

-   Provides separation of configuration from code, making applications more secure and portable
-   Easily adaptable to different environments without changing the source code

---

<!-- Slide 14 -->

# Configuration files

**Definition**

-   Text files that store configuration settings
-   Used to control the behavior of software without modifying the actual code

**Characteristics**

-   Typically written in formats like JSON, YAML, XML, INI, or plain text
-   Define key settings such as database connections, API endpoints, authentication details
-   Separated from the codebase, allowing flexible configuration across different environments
-   Can be version-controlled, enabling easy updates and rollbacks

**Advantages**

-   Simplifies application deployment and maintenance
-   Makes the software more portable, adaptable, and scalable across different environments
-   Keeps sensitive data (e.g, credentials, API keys) outside the codebase

---

<!-- Slide 15 -->

# Exit Codes

-   Numeric values returned by a process upon termination
-   Indicate the success or failure of the executed command or program
-   Standard Exit Codes
    -   **0**: Success
    -   **1-255**: Error or specific status

---

<!-- Slide 16 -->

# Standard Streams

Input and output communication channels between a process and environment

-   **stdin** (Standard Input):
    -   Input stream for programs, typically from the keyboard.
    -   File descriptor: `0`.
-   **stdout** (Standard Output):
    -   Output stream for program results, typically to the terminal.
    -   File descriptor: `1`.
-   **stderr** (Standard Error):
    -   Output stream for error messages, separate from `stdout`.
    -   File descriptor: `2`.

---

<!-- Slide 17 -->

# Signals

-   Notifications sent to processes by the kernel or other processes
-   Users can use the **kill** command to send signals

```bash
kill -15 78374
```

  

-   Common Signals

| Signal Name | Number | Description |
| --- | --- | --- |
| `SIGINT` | 2 | Interrupt from keyboard (Ctrl+C) |
| `SIGTERM` | 15 | Termination request |
| `SIGKILL` | 9 | Forcefully terminate a process |
| `SIGHUP` | 1 | Hangup, reload configuration |
| `SIGSTOP` | 19 | Pause a process |
| `SIGCONT` | 18 | Resume a paused process |
| `SIGUSR1`, `SIGUSR2` | 10, 12 | Available for application-defined purposes |

---

<!-- Slide 18 -->

# Libraries and Frameworks

---

<!-- Slide 19 -->

# Library

-   Collection of pre-written code
-   Developers can reuse libraries to solve common problems or perform specific tasks
-   Provide functionality without the need to write everything from scratch

---

<!-- Slide 20 -->

# Why Use Libraries?

**Code Reusability**

-   Saves time by reusing existing code
-   Reduces redundancy in programming
-   Allows developers to focus on unique logic

**Efficiency and Productivity**

-   Accelerates development
-   Provides well-tested and optimized solutions for common problems
-   Allows faster implementation of complex features with less effort

**Maintained and Updated**

-   Often maintained by the community or organizations, ensuring they stay up-to-date and bug-free
-   Regular updates introduce new features, performance improvements, and security patches

---

<!-- Slide 21 -->

# Types of Libraries

**Standard Libraries**

-   Comes built-in with a programming language, offering core functionalities.

**Third-Party Libraries**

-   Developed by external contributors and added to projects via the package managers (e.g., npm, pip, Maven).

---

<!-- Slide 22 -->

# Framework

**Definition**

-   Pre-built structure that provides a foundation for developing applications
-   Enforces a specific way of building applications
-   Offers a set of rules, tools, libraries, and best practices

**Key Features**

-   Code Reusability
-   Provides Structure
-   Enforces Best Practices
-   Speeds Up Development

---

<!-- Slide 23 -->

# Examples of Frameworks

-   Angular - Web Applications
-   TensorFlow - Machine Learning
-   Qt - Desktop Applications
-   Unreal Engine - Game Development

---

<!-- Slide 24 -->

# Package Managers

-   Tools that automate the process of installing, updating, and managing libraries and frameworks
-   Simplifies dependency management
-   Makes it easy to install and update packages
-   Specific to the programming language
-   Ensures consistent versions across development environments

**Examples:**

-   Python: pip, uv, poetry for installing packages from PyPI
-   JavaScript/TypeScript: npm and yarn for managing packages from npm registry
-   Java: Maven and Gradle for handling libraries and dependencies

---

<!-- Slide 25 -->

# Software Development Kit (SDK)

**Definition**

-   Comprehensive set of tools, libraries, documentation, and code samples
-   Allows developers to build applications for a specific platform
-   Facilitates the entire development process
    -   Writing code
    -   Testing
    -   Debugging

**Examples**

-   Android SDK
-   AWS SDK

---

<!-- Slide 26 -->

# Software Licenses

---

<!-- Slide 27 -->

# Understanding Software Licenses

**What is a Software License?**

-   A legal agreement
-   Defines how software can be used, modified, and distributed
-   Protects the rights of creators
-   Establishes guidelines for consumers

**Types of Software Licenses**

-   Proprietary Licenses
-   Open Source Licenses

---

<!-- Slide 28 -->

# Types of Software Licenses (cont.)

**Proprietary Licenses**

-   Restrict usage, modification, and redistribution
-   Software remains the intellectual property of the creator
-   Users often pay for a license to access the software or code

**Open Source Licenses**

-   Allow users to view, modify, and distribute the source code
-   Promote collaboration and community involvement
-   Types include Permissive, Copyleft, and Public Domain licenses

---

<!-- Slide 29 -->

# Open Source Licenses

**Permissive Licenses**

-   Flexible use of the software, even in proprietary projects
-   Often require attribution
-   Allows modification, distribution, and commercialization

**Copyleft Licenses**

-   Require derivative works to be released under the same license
-   Ensure that any changes or additions are open-source if redistributed

**Public Domain**

-   Can be freely used without restrictions
-   Offers the most freedom
-   No protections for the original creator

---

<!-- Slide 30 -->

# Open Source Licenses (cont.)

| **License** | **Type** | **Allows Commercial Use** | **Requires Attribution** | **Requires Same License on Derivatives** | **Common of Use Cases** |
| --- | --- | --- | --- | --- | --- |
| MIT License | Permissive | Yes | Yes | No | Web libraries, frameworks |
| Apache 2.0 | Permissive | Yes | Yes | No, but includes a NOTICE file | Cloud and big data projects |
| BSD | Permissive | Yes | Yes | No | Lightweight open-source projects |
| GPL (General Public License) | Copyleft | Yes | Yes | Yes | Software that should stay open-source |
| LGPL (Lesser GPL) | Weak Copyleft | Yes | Yes | Only for linked modifications | Libraries, for use in proprietary code |
| AGPL (Affero GPL) | Strong Copyleft | Yes | Yes | Yes | Web and server applications |
| Mozilla Public License (MPL) | Weak Copyleft | Yes | Yes | Only applies to modified files | Mozilla projects like Firefox |
| Unlicense | Public Domain | Yes | No | No | Software contributed to public domain |

---

<!-- Slide 31 -->

# Software Versioning

---

<!-- Slide 32 -->

# Understading Software Versioning

-   Process of assigning unique version label to a unique states of software
-   Unique version names or unique version numbers
-   Helps developers and cosumers to communicate updates and improvements
-   Essential for coordinating development and release cycles

---

<!-- Slide 33 -->

# Different Versioning Patterns

-   Calendar Versioning
    
    -   Uses dates to indicate release versions
    -   Example: 2023.09, 2023.10, etc.
-   Semantic Versioning
    
    -   Based on Major, Minor, and Patch numbers (e.g., 1.2.3)
    -   Widely adopted in modern software
-   Sequential Versioning
    
    -   Incremental numbering, simple and straightforward
    -   Usually incremented by the build system
    -   Focus is less on versioning and more on incremental releases with backward compatibility
    -   Example: build-1, build-2, etc.

---

<!-- Slide 34 -->

# Different Versioning Patterns (cont.)

-   Commit Hash
    
    -   A shortened Git hash (e.g., 4f2d3b2)
    -   Used in continuous deployment pipelines
-   Hybrid Versioning
    
    -   Combines two or more patterns (e.g. SemVer + Calendar, SemVer + commit sha, Calendar + build number)
    -   Used to balance regular feature releases and patch updates
-   Internal version vs External version
    
    -   Software may have an "internal" version number which differs from the version number shown in the product name
    -   Example: Java 8 (1.8.0), Windows 7 (NT 6.1)

---

<!-- Slide 35 -->

# Application Types

---

<!-- Slide 36 -->

# Desktop Applications

**Definition**

-   Software programs that run locally on a user’s computer
-   Installed directly on the operating system (Windows, macOS, Linux, etc.)

**Characteristics**

-   Typically offer a rich user interface
-   Can access local system resources (e.g., files, hardware, etc.)
-   Often work offline, without needing an network connection
-   Usually tied to a specific platform or operating system

**Examples**

-   Microsoft Word (productivity software)
-   Adobe Photoshop (image editing)
-   Visual Studio Code (development environment)

---

<!-- Slide 37 -->

# Command-Line Interface (CLI) Applications

**Definition**

-   Applications that are operated via a command-line interface
-   Users interact by typing commands, rather than using graphical elements

**Characteristics**

-   Lightweight and efficient, often consuming fewer system resources than GUI applications
-   Text-based input/output with minimal graphical elements
-   Allows automation and scripting for repetitive tasks
-   Can be run remotely over SSH or other terminal access protocols

**Advantages**

-   Highly flexible and powerful for power users or developers
-   Can be used to automate complex workflows or tasks
-   Often faster than GUIs for repetitive or bulk operations

---

<!-- Slide 38 -->

# Mobile Applications

**Definition**

-   Applications designed to run on mobile devices (e.g., smartphones and tablets)
-   Installed through app stores like Google Play Store (Android) or Apple App Store (iOS)

**Characteristics**

-   Optimized for touchscreen interfaces and smaller displays
-   Can leverage mobile hardware features (GPS, camera, sensors)
-   Typically run on mobile operating systems (e.g., Android, iOS).

**Types**

-   Native Apps: Built for specific platforms (Android/iOS) using platform-specific languages and SDK (e.g., Swift, Kotlin)
-   Hybrid Apps: Built with mix of native and web-based technologies

---

<!-- Slide 39 -->

# Classic Web Applications

**Definition**

-   Software applications that run in a web browser
-   Users interact with the app via the browsers (e.g., Chrome, Firefox, Edge).
-   Relys on server-side processing

**Characteristics**

-   Typically built using server-side languages (e.g., Java, C#, GO, Python) in combination with HTML, CSS, JavaScript
-   Requests are sent to a server, which processes the logic and returns fully rendered web pages
-   Page reloads or navigations are common between actions
-   Requires a persistent connection to function

**Advantages**

-   No need for installation
-   Easy to maintain and update

---

<!-- Slide 40 -->

# Modern Web Applications

**Definition**

-   Separate the frontend (client-side) and backend (server-side) logic.
-   Frontend interacts with users through a web browser
-   Backend provides data and services via web APIs to the frontend

**Characteristics**

-   Frontend: Built using modern technologies like JavaScript frameworks (e.g., React, Angular, Vue)
-   Backend: Provides RESTful or GraphQL APIs, often using languages like Java, C#, Python, Go, TypeScript
-   Enables dynamic and real-time updates without full page reloads (Single Page Applications, SPAs)
-   Can handle offline capabilities through service workers and caching

**Advantages**

-   Better user experience with faster, dynamic interactions
-   Clear separation of concerns: frontend focuses on UI/UX, backend handles data and logic
-   Scalable and flexible for development and maintenance

---

<!-- Slide 41 -->

# Progressive Web Applications

**Definition**

-   Web applications that combine the best of web and mobile apps
-   Designed to work on any platform with a standards-compliant browser
-   Provides a native/classic app-like experience

**Characteristics**

-   Offline Access
-   Responsive Design
-   Installable
-   Push Notifications
-   Fast and Reliable

**Advantages**

-   Improved Performance
-   Reduced Development Costs

---

<!-- Slide 42 -->

# Applications Data and Persistence

---

<!-- Slide 43 -->

# Applications Data and Persistence

**Definition**

-   Strategies and technologies used to store, retrieve, and manage application data
-   Ensures that information remains available even after the application shuts down or restarts
-   Ensures data is available even on multiple instances of the application

**Key Approaches**

-   Relational Databases (RDBMS)
-   NoSQL Databases
-   Caching
-   Message Queues and Streaming platforms
-   Object and File Storage

---

<!-- Slide 44 -->

# Relational Databases (RDBMS)

**Definition**

-   Databases based on a relational model
-   Data is stored in tables with rows and columns
-   Use SQL (Structured Query Language)

**Characteristics**

-   Schema-based with predefined structures (tables, relationships)
-   Supports ACID (Atomicity, Consistency, Isolation, Durability) transactions
-   Ensures data integrity with primary and foreign keys

**Use Cases**

-   Financial systems requiring consistency and strong data integrity
-   Applications with structured data and complex relationships

**Examples:** PostgreSQL, MariaDB, MySql, Oracle Database, MSSQL

---

<!-- Slide 45 -->

# NoSQL Databases

**Definition**

-   A class of databases
-   designed to handle unstructured or semi-structured data
-   Does not rely on traditional table-based structures like RDBMS

**Characteristics**

-   Schema-less and designed for scalability
-   Supports a variety of data models: Key-Value, Document, Column, Graph
-   Optimized for handling large volumes of data and high throughput

**Use Cases**

-   Real-time analytics, big data applications.
-   Content management systems with dynamic, evolving data.

**Examples:** MongoDB (Document Store), Redis (Key-Value Store), Cassandra (Column Store)

---

<!-- Slide 46 -->

# Caching

**Definition**

-   A technique to store frequently accessed data in a faster data store
-   Reduce load on databases
-   Improves performance by reducing latency

**Characteristics**

-   In-memory storage (RAM) for fast access
-   Data is often ephemeral and refreshed periodically
-   Used to minimize database reads and enhance application performance

**Use Cases**

-   Session management in web applications
-   Caching database queries to speed up user requests

**Examples:** Redis, Valkey, Memcached

---

<!-- Slide 47 -->

# Message Queues and Event Streaming Platform

**Definition**

-   Systems that allow asynchronous communication between different components of an application
-   Stores and provides messages
-   Applications relay on sending and receiving messages

**Characteristics**

-   Messages are stored in a queue until they are processed
-   Allows for decoupling of services
-   Improves scalability and reliability
-   Supports load balancing and fault tolerance

**Use Cases**

-   Event-driven architectures, such as processing orders
-   Decoupling services for scalable and reliable communication

**Examples:** RabbitMQ, Amazon SQS, Apache Kafka

---

<!-- Slide 48 -->

# Object and File Storage

**Object Storage**

-   Stores data as objects in a flat structure
-   Accessed via REST APIs
-   Ideal for unstructured data, backups, and static content

**File Storage (POSIX/NFS/SMB)**

-   Traditional hierarchical file system structure
-   Supports standard file operations (read, write, delete)
-   Suitable for shared file access and traditional applications

**Use Cases**

-   Object Storage: media storage, static websites, backup
-   File Storage: application data, large files

**Examples:**

-   Object Storage: Amazon S3, Azure Blob Storage, Google Cloud Storage
-   File Storage: Local File System, NFS, SMB/CIFS

---

<!-- Slide 49 -->

# Demos and Labs

-   GitHub Repository
    -   [https://github.com/varadinov/devops\_101\_labs/tree/main/04](https://github.com/varadinov/devops_101_labs/tree/main/04)