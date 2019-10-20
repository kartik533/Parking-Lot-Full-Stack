package com.scb.retail.parkinglot.bean;

public class Slots {
	private String carSize;
	private int carCount;
	
	public Slots(){
		
	}

	public Slots(String carSize, int carCount) {
		super();
		this.carSize = carSize;
		this.carCount = carCount;
	}

	public String getCarSize() {
		return carSize;
	}

	public void setCarSize(String carSize) {
		this.carSize = carSize;
	}

	public int getCarCount() {
		return carCount;
	}

	public void setCarCount(int carCount) {
		this.carCount = carCount;
	}
	
	

}
