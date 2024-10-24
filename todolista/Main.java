import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    private static final ArrayList<Todolist> listazad = new ArrayList<>();
    private static int zadanieId = 1;

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("1. Dodaj nowe zadanie");
                System.out.println("2. Oznacz zadanie jako zakończone");
                    System.out.println("3. Usuń zadanie");
                        System.out.println("4. Wyświetl listę zadań");
                            System.out.println("5. Wyjście");
                                System.out.print("Wybierz opcję (1/2/3/4/5): ");

            int wybor = getInt(scanner);

            switch (wybor) {
                case 1:
                    dodaj(scanner);
                    break;

                case 2:
                    zakonczZad(scanner);
                    break;

                case 3:
                    usun(scanner);
                    break;

                case 4:
                    wyslista();
                    break;

                case 5:
                    running = false;
                    System.out.println("Koniec programu.");
                    break;

                default:
                    System.out.println("Nieprawidłowa opcja, spróbuj ponownie.");

            }
        }

        scanner.close();
    }

    private static void dodaj(Scanner scanner) {

        System.out.print("Podaj nazwę zadania: ");
        String nazwa = scanner.nextLine();

        System.out.print("Podaj opis zadania: ");
        String opis = scanner.nextLine();

        Todolist noweZad = new Todolist(zadanieId++, nazwa, opis, false);

        listazad.add(noweZad);

        System.out.println("Zadanie \"" + nazwa + "\" zostało dodane do listy.");

    }

    private static void zakonczZad(Scanner scanner) {

        wyslista();

        if (listazad.isEmpty()) {

            return;

        }

        System.out.print("Podaj numer zadania do oznaczenia jako zakończone: ");
        int numer = getInt(scanner);

        if (numer > 0 && numer <= listazad.size()) {

            Todolist zadanie = listazad.get(numer - 1);

            zadanie.setCompleted(true);

            System.out.println("Zadanie \"" + zadanie.getName() + "\" zostało zakończone.");

        } else {

            System.out.println("Nie ma zadania o takim numerze.");

        }
    }

    private static void usun(Scanner scanner) {
        wyslista();

        if (listazad.isEmpty()) {

            return;

        }

        System.out.print("Podaj numer zadania, które chcesz usunąć: ");
        int numer = getInt(scanner);

        if (numer > 0 && numer <= listazad.size()) {

            Todolist zadanie = listazad.remove(numer - 1);
            System.out.println("Zadanie \"" + zadanie.getName() + "\" zostało usunięte z listy.");

        } else {

            System.out.println("Nie ma zadania o takim numerze.");

        }
    }

    private static void wyslista() {
        if (listazad.isEmpty()) {

            System.out.println("Lista zadań jest pusta.");

        } else {

            System.out.println("Lista zadań:");

            for (int i = 0; i < listazad.size(); i++) {
                System.out.println((i + 1) + ". " + listazad.get(i));

            }
        }
    }

    private static int getInt(Scanner scanner) {
        while (!scanner.hasNextInt()) {

            System.out.print("Proszę podać poprawną liczbę: ");
            scanner.next();

        }

        int value = scanner.nextInt();
        scanner.nextLine();
        return value;

    }
}