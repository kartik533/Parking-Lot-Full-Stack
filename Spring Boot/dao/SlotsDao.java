package com.scb.retail.parkinglot.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.scb.retail.parkinglot.bean.Slots;

@Transactional
@Repository
public class SlotsDao {
	

	@Autowired
	JdbcTemplate jdbcTemplate;

	List<Slots> slotList = new ArrayList<Slots>();

	public List<Slots> getAllCars() {
		String sql = "select * from slots";
		RowMapper<Slots> rowmapper = new SlotsRowMapper();
		slotList = this.jdbcTemplate.query(sql, rowmapper);
		return slotList;
	}

	public Slots getSlotByCarType(String type) {
		String sql = "select * from slots where car_type=?";
		RowMapper<Slots> rowmapper = new SlotsRowMapper();
		Slots app = this.jdbcTemplate.queryForObject(sql, rowmapper, type);
		return app;
	}
}
