import java.util.Scanner;

public class Kurir {

    public static void main(String[] args) {
        Restaurant restaurant = new Restaurant();

        restaurant.addNumberOfRestaurant();
    }
}

class Restaurant {
    public double[] restaurantDistance = {8, 5.3, 9.5, 10, 11, 20.5, 3.3, 4.8, 6.9};
    public int numberOfRestaurant;
    private Scanner scanner = new Scanner(System.in);

    public void addNumberOfRestaurant() {
        System.out.print("Masukan Jumlah Restaurant = ");
        numberOfRestaurant = scanner.nextInt();
        calculateTotalDistance();
    }

    public void calculateTotalDistance() {
        if (numberOfRestaurant <= 10) {
            double totalDistance = 0;

            for (int i = 0; i < numberOfRestaurant; i++) {
                System.out.println();
                totalDistance = totalDistance + restaurantDistance[i];
            }

            result(totalDistance);
        } else {
            System.out.println("\n Restaurant lebih dari 10");
            addNumberOfRestaurant();
        }
    }

    /**
     * Asumsi jarak restaurant selalu menjauh dari kantor sehingga untuk menghitungnya total distance * 2
     * untuk mengkalkulasikan jarak berangkat dan pulang
     * @param totalDistance
     */
    public void result(double totalDistance) {
        double result = (totalDistance *2) / 2.5;
        System.out.println("Jumlah bahan bakar yang dibutuhkan = " + result);
    }
}