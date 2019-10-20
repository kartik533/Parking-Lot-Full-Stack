package com.scb.retail.parkinglot.bean;

import java.sql.Time;
import java.time.LocalTime;

public class Parking {
	private int ticketNumber;
	private String carSize;
	private Time checkinTime;
	private String status;
	private Time checkoutTime;

	public Parking() {

	}

	public Parking(int ticketNumber, String carSize, Time checkinTime, String status, Time checkoutTime) {
		super();
		this.ticketNumber = ticketNumber;
		this.carSize = carSize;
		this.checkinTime = checkinTime;
		this.status = status;
		this.checkoutTime = checkoutTime;
	}

	public Parking(String carSize, Time checkinTime, String status, Time checkoutTime) {
		super();
		this.carSize = carSize;
		this.checkinTime = checkinTime;
		this.status = status;
		this.checkoutTime = checkoutTime;
	}

	public Time getCheckoutTime() {
		return checkoutTime;
	}

	public void setCheckoutTime(Time checkoutTime) {
		this.checkoutTime = checkoutTime;
	}

	public int getTicketNumber() {
		return ticketNumber;
	}

	public void setTicketNumber(int ticketNumber) {
		this.ticketNumber = ticketNumber;
	}

	public String getCarSize() {
		return carSize;
	}

	public void setCarSize(String carSize) {
		this.carSize = carSize;
	}

	public Time getCheckinTime() {
		return checkinTime;
	}

	public void setCheckinTime(Time time) {
		this.checkinTime = time;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
