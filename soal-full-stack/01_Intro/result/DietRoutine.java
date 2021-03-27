import java.util.*;

public class DietRoutine {
    
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        final int MAX_CALORIE = 1500;
        int calorie;
        
        System.out.print("Input jumlah kalori anda jika lebih dari "+ MAX_CALORIE + " kalori = ");
        calorie = scanner.nextInt();
        int calorieOver;
        
        if(calorie > MAX_CALORIE) {
            calorieOver = calorie - MAX_CALORIE;
            System.out.println("\n" +sportRecomendation(calorieOver));
            
        } else {
            System.out.println("Kalori anda tidak melebihi batas maksimal");
        }
        
        
    }
    
    public static String sportRecomendation(int calorieOver) {
        String result = "Anda disarankan untuk ";
        
        if(calorieOver == 800) {
            result = result + "Lari";
        } else if(calorieOver == 450) {
            result = result + "Bersepeda";
        } else if(calorieOver < 200) {
            result = result + "Berenang";
        }
        
        return result;
    }
}