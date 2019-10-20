package com.scb.retail.parkinglot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scb.retail.parkinglot.bean.Parking;
import com.scb.retail.parkinglot.dao.ParkingDao;

@Service
public class ParkingService {

	@Autowired
	ParkingDao parkDao;

	public List<Parking> getAllCars() {
		return parkDao.getAllCars();
	}
	
	public Parking getCarByTicketNo(int id) {
		return parkDao.getCarByTicketNo(id);
	}
	
	public Parking getLatestCar() {
		return parkDao.getLatestCar();
	}

	public void addCar(Parking car) {

		parkDao.addCar(car);
	}
	
	public void updateCar(int id) {

		parkDao.updateCar(id);
	}
	
	
}
