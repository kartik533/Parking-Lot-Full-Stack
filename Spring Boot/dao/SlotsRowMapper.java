package com.scb.retail.parkinglot.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.scb.retail.parkinglot.bean.Slots;

public class SlotsRowMapper implements RowMapper<Slots> {

	@Override
	public Slots mapRow(ResultSet rs, int rowNum) throws SQLException {

		Slots slot = new Slots();
		slot.setCarSize(rs.getString(1));
		slot.setCarCount(rs.getInt(2));
		return slot;

	}
}