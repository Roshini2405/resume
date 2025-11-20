-- Create Customer Dimension
CREATE TABLE dim_customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    region VARCHAR(30)
);

-- Create Product Dimension
CREATE TABLE dim_product (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    category VARCHAR(30)
);

-- Create Fact Table
CREATE TABLE fact_sales (
    sales_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    quantity_sold INT,
    unit_price DECIMAL(10,2),
    total_amount DECIMAL(10,2),
    sale_date DATE,
    FOREIGN KEY (customer_id) REFERENCES dim_customer(customer_id),
    FOREIGN KEY (product_id) REFERENCES dim_product(product_id)
);
INSERT INTO dim_customer VALUES
(1, 'Ravi Kumar', 'North'),
(2, 'Priya Singh', 'South'),
(3, 'Amit Patel', 'East'),
(4, 'Neha Sharma', 'West');
INSERT INTO dim_product VALUES
(101, 'Laptop', 'Electronics'),
(102, 'Headphones', 'Electronics'),
(103, 'T-Shirt', 'Clothing'),
(104, 'Rice Bag', 'Grocery');
INSERT INTO fact_sales VALUES
(1, 1, 101, 2, 50000, 100000, '2025-11-01'),
(2, 2, 102, 3, 2000, 6000, '2025-11-02'),
(3, 3, 103, 5, 800, 4000, '2025-11-02'),
(4, 4, 104, 10, 1200, 12000, '2025-11-03'),
(5, 1, 103, 2, 800, 1600, '2025-11-03'),
(6, 2, 104, 5, 1200, 6000, '2025-11-04');
SELECT 
    p.category,
    SUM(f.total_amount) AS total_sales
FROM fact_sales f
JOIN dim_product p ON f.product_id = p.product_id
GROUP BY p.category;
SELECT 
    c.region,
    SUM(f.total_amount) AS total_sales
FROM fact_sales f
JOIN dim_customer c ON f.customer_id = c.customer_id
GROUP BY c.region;

