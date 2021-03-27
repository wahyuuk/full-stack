package sample;

import java.util.*;

public class Kalkulator {

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        Operation operation = new Operation();
        operation.inputFirstNumber();
        operation.selection();
    }
}

class Operation {
    Scanner scanner = new Scanner(System.in);
    public double firstNumber;
    public double secondNumber;
    public int selection;

    public double pertambahan() {
        return firstNumber + secondNumber;
    }

    public double pengurangan() {
        return firstNumber - secondNumber;
    }

    public double perkalian() {
        return firstNumber * secondNumber;
    }

    public double pembagian() {
        return firstNumber / secondNumber;
    }

    public void inputFirstNumber() {
        System.out.println("# Input Bilangan Pertama");
        System.out.print("Input: ");
        firstNumber = scanner.nextDouble();
    }

    public void inputSecondNumber() {
        System.out.println("# Input Bilangan Kedua");
        System.out.print("Input: ");
        secondNumber = scanner.nextDouble();
    }

    public void selection() {
        System.out.println("# Input Operasi");
        System.out.println("# 1. Penjumlahan");
        System.out.println("# 2. Pengurangan");
        System.out.println("# 3. Perkalian");
        System.out.println("# 4. Pembagian");
        System.out.print("Input [1-4]: ");
        selection = scanner.nextInt();
        checkSelection();
    }

    public void checkSelection() {
        switch(selection) {
            case 1:
                inputSecondNumber();
                System.out.println("# Hasil");
                System.out.println(firstNumber + "+" + secondNumber + " = " + pertambahan());
                break;
            case 2:
                inputSecondNumber();
                System.out.println("# Hasil");
                System.out.println(firstNumber + "-" + secondNumber + " = " + pengurangan());
                break;
            case 3:
                inputSecondNumber();
                System.out.println("# Hasil");
                System.out.println(firstNumber + "x" + secondNumber + " = " + perkalian());
                break;
            case 4:
                inputSecondNumber();
                System.out.println("# Hasil");
                System.out.println(firstNumber + ":" + secondNumber + " = " + pembagian());
            default:
                System.out.println("Pilihan Anda Salah");
                selection();
        }
    }
}