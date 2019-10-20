package com.scb.retail.parkinglot.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.scb.retail.parkinglot.bean.Parking;

public class ParkingRowMapper implements RowMapper<Parking> {

	@Override
	public Parking mapRow(ResultSet rs, int rowNum) throws SQLException {

		Parking park = new Parking();
		park.setTicketNumber(rs.getInt(1));
		park.setCarSize(rs.getString(2));
		park.setCheckinTime(rs.getTime(3));
		park.setStatus(rs.getString(4));
		park.setCheckoutTime(rs.getTime(5));

		return park;

	}
}