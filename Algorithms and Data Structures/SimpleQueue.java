package org.example;

public class SimpleQueue {
	
	private int size = 5;
	int[] Q = new int[size];
	private int front,rear;
	
	SimpleQueue() {
		this.front = -1;
		this.rear = -1;
	}
	
	boolean isEmpty(){
		if ( this.front == -1 ) 
			return true;
		else
			return false;
	}
	
	boolean isFull() {
		if ( this.rear == size - 1 ) 
			return true;
		else
			return false;
	}
	
	void Enqueue(int x) {
		if (isFull()) {
			System.out.println("Queue is full");
		}
		else if (isEmpty()) {
			front = 0;
			rear++;
			Q[rear] = x;
			System.out.println(x + " inserted");	
		}
		else {
			rear++;
			Q[rear] = x;
			System.out.println(x + " inserted");
		}
	}
	
	void Dequeue() {
		if (isEmpty()) {
			System.out.println("Queue is empty");
		}
		else {
			int x = Q[front];
			if(front > rear) {
				front = -1;
				rear = -1;
			}
			front++;
			System.out.println(x + " deleted");
		}
	}
	
	void display() {
		if (isEmpty()) {
			System.out.println("Queue is empty");
		}
		else {
			for(int i = front; i <= rear; i++) {
				System.out.print(Q[i] + " ");
			}
			System.out.println();
		}
	}

	public static void main(String[] args) {
		SimpleQueue sq = new SimpleQueue();
		sq.Enqueue(5);
		sq.Enqueue(10);
		sq.Enqueue(15);
		sq.Dequeue();
		
		sq.display();
		
		sq.Enqueue(25);
		sq.Enqueue(30);
		
		sq.display();
		
		sq.Enqueue(42);
		
		sq.display();
		

	}

}
