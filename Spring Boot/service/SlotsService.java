package com.scb.retail.parkinglot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scb.retail.parkinglot.bean.Slots;
import com.scb.retail.parkinglot.dao.SlotsDao;
@Service
public class SlotsService {

	@Autowired
	SlotsDao slotDao;

	public List<Slots> getAllCars() {
		return slotDao.getAllCars();
	}
	
	public Slots getCarByType(String type) {
		return slotDao.getSlotByCarType(type);
	}
	
	
}
