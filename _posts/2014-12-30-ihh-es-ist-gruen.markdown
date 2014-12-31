---
title: "Ihh, was ist das denn? So grün!"
date: 2014-12-30 23:22
layout: post
categories: default update
---

Erinnert ihr euch noch, vor 2 Tagen, als ich diesen einen Blogpost hochgeladen haben "Zwischen zwei Jahren"? Ach ja, schöne Zeiten. Doch dann veränderte sich alles. Kurz nachdem ich diesen Blogpost veröffentlicht hatte erreichte mich eine Nachricht: "Mach doch eine Android-App" (Urheber wird aus Sicherheitsgründen nicht genannt)
Die Aussage bezog sich auf den letzten Absatz des Blogposts, in dem ich geschrieben habe, dass ich jedes Jahr zu Silvester einen Countdown programmiere.

In der Vergangenheit habe ich schon oft versucht mal eine Android-App zu programmieren. Erfolge bisher: 0. Keine einzige funktionierende App. Die Android-Plattform war mir einfach zu verwirrend und nach ein paar Stunden habe ich dann aufgegeben. Jetzt dachte ich: Countdown, damit hast du ja Erfahrung, und so schwer kann es ja nicht sein, jeder Depp und sein Hund macht heutzutage Apps.

Also, es war 23:30, die perfekte Uhrzeit um diese in Nachhinein betrachtet doch etwas überstürzten Gedanken in die Tat umzusetzen. Doch vor das Vergnügen (oder die Arbeit, wie man es nimmt) hat Google das Herunterladen und Installieren von Entwicklertools gesetzt. Ein paar Minuten und etwa 3 Gigabyte später war es dann soweit, Entwicklungsumgebung starten, neues Projekt anlegen und Namen angeben und Android-Version auswählen. Ach ja, richtig...

### Problem 1: Android-Version

Ein Ziel bei meinem alljährlichen Countdown-Programmieren ist es, das neuste vom neusten auszuprobieren. Auf Android heißt das: Material Design. In Android 5.0 Lollipop wurde dieses neue Design eingeführt, und ich muss sagen es sieht verdammt gut aus. Aber dieses Design gibt es in der Form eben nur auf Android 5.0 und die Anzahl der Geräte in meinem Bekanntenkreis, die diese Version haben ist 1: Mein Handy.

Beim Einrichten des Projekts gibt es dann so ein Auswahlfeld: Android-Version. Wenn ich da 5.0 auswähle sieht es gut aus, wenn ich 4.1 auswähle kann es auch jemand außer mir benutzen. schwierige Frage. Nach etwas googeln bin ich dann auf die "Android Support Librarys" gestoßen, die kann man in sein Projekt einbinden und auch auf früheren Versionen Material Design verwenden. Gut, der Abend war also gerettet. Dachte ich zumindest.

Denn die Library macht von sich aus rein gar nichts, aber das ziemlich gut. Ich erspare dir jetzt die technischen Details, aber für einen Anfänger in Android-Programmierung war es wirklich sehr verwirrend. Allein durch das Design ist die Komplexität des Projekts schon in ungeahnte Höhen geschossen.

### Problem 2: Es ist Java

Java, eine der meist verwendeten und meist gehassten Programmiersprachen der Welt. Der Durchschnitts-PC-Nutzer kennt Java meistens von 2 Dingen:

1. Den nervigen Update-Warnungen, die, zumindest auf Windows, ständig aufpoppen
2. Minecraft

Java ist eigentlich keine schlimme Sprache, aber ich möchte hier mal meinen Hautpgrund, warum ich es hasse in einer kurzen, zitierfähigen Aussage zusammenfassen:

> In Java hat man 3 Möglichkeiten eine Aufgabe zu erledigen:
> Die "einfache" Methode, sie benötigt eine Zeile code, ist allerdings deprecated.
> Die "empfohlene" Methode, sie beinhalted das erstellen von mindestens 10 Klasse, 3 Interfaces und zigtausend Funktionen, um zwei Zahlen zu vergleichen.
> Die "library" Methode, eine große und Umfangreiche Bibiliothek zum Berechnen von Differenzialen und Integralen einbinden, weil sie eine gute Funktion hat um zwei Zahlen zu vergleichen.

Ich Stand vor dieser Situation, als ich versucht habe die Zeit bis Silvester zu berechnen. JODA-Time heißt die Bibliothek, die ich dazu verwendet habe.

### Problem 3: YouTube

An Neujahr sollte dann ein YouTube-Video abgespielt werden, in dem es etwas Feuerwerk zu sehen gibt. Das sollte ja nicht so schwer sein, dachte ich etwas voreilig. Um das zu tun muss man sich nämlich bei Google registrieren. Man braucht Zugriff auf die "YouTube Data API". Dazu muss man sich bei Google mit seiner Anwendung registrieren und bekommt dan einen API-Key, den man in seinem Code angeben muss. Wenn ma jetzt, so wie ich, denn ersten Buchstaben des Keys nicht mit kopiert, geht die YouTube-App auf, das Video fängt an zu laden, dann geht es sofort wieder zu, ohne Fehlermeldung. Du kannst dir vorstellen, wie lange es dauert, dass herauszufinden.


### Problem 4: Lustige Dinge mit Bildern

Damit die App nich so leer aussieht habe ich mich Entschlossen unter dem Countdown Orte anzuzeigen, die schon Silvester gefeiert haben (wegen Zeitzonen), dazu ein Bild. Wenn dieses Bild aber mehr als 1280 Pixel breit ist, fängt die App an zu ruckeln und wird praktisch unbenutzbar. Auch das hat lange gedauert, bis ich das herausgefunden hatte.

### Problem 5: App Stores

Jetzt kommen wir langsam in die Gegenwart, die App ist fertig und ich würde sie jetzt eigentlich gerne in den Google Play Store hochladen. Dachte ich zumindest. Als ich dann nämlich gesehen habe, dass man eine "Developer Registration Fee" von 25$ (zzgl. Auslandsgebühren) per Kreditkarte bezahlen muss, wollte ich dann irgendwie doch nicht.

Um meine App dann doch noch irgendwie hochzuladen, habe ich es im Amazon Appstore versucht. Dort muss die App aber zuerst geprüft werden, und ich befürchte dass das dieses Jahr nichts mehr wird.

### Fazit

Android-Programmierung wird wohl auch nächstes Jahr nicht zu meinen Lieblingsbeschäftigungen gehören, auch wenn ich sagen muss, dass es bis auf die angesprochenen Probleme besser verlief, als ich von meinen vorherigen Erfahrungen her befürchtet hatte.

Die Sache mit den App Stores finde ich allerdings nicht gerade schön: Ich bin sicherlich nicht der einzige Entwickler, der eine kleine App umsonst in den Store stellen wollte, und dann aufgegeben hat, weil er keine 25$ zahlen will. Ich verstehe ja teilweise, dass Google 30% der Gewinne auf dem Play Store einbehält, aber auf der anderen Seite sollte Google dankbar sein den Leuten gegenüber, die Android die große Auswahl an Apps bescheren. Zumindest über einen Rabatt oder ähnliches für Schüler und Studenten hätte ich mich gefreut.

An dieser Stelle möchte ich auch Apple erwähnen, die nicht einmalig 25$ verlangen, sondern jährlich 99$.

### Die App

Ach ja, bevor ich es vergesse: Die App gibt es als [APK-Datei zum download](/assets/20141230/app-release.apk).

Damit verabschiede ich mich nun als neu gewordener Vater eines Androiden für 2014, der nächste Blogpost kommt bestimmt, aber erst nächstes Jahr.