import axios from "axios";
import React from "react";
import { createMessage, returnErrors  } from "./messages";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS, DETAIL_LEAD,UPDATE_LEAD } from "./types";
import { tokenConfig } from "./auth";


export const getLeads = () => (dispatch,getState) => {
    axios
        .get("/api/leads/",tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_LEADS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};


export const deleteLead = id => (dispatch,getState) => {
  axios
      .delete(`/api/leads/${id}`,tokenConfig(getState))
      .then((res) => {
        dispatch(createMessage({deleteLead: "Lead Deleted"}))
          dispatch({
              type: DELETE_LEAD,
              payload: id,
          });
      })
      .catch((err) => console.log(err));
};

export const addLead = lead => (dispatch, getState) => {
  

  axios
    .post("/api/leads/",lead, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({addLead: "Lead Added"}))
      dispatch({
          type: ADD_LEAD,
          payload: res.data,
      });
  })
  .catch(err => {
    const errors = {
      msg: err.response.data,
      status: err.response.status
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors
    });
  });
}

export const detailLead = id => (dispatch, getState) => {
  axios
      .get(`/api/leads/${id}/`, tokenConfig(getState))
      .then((res) => {
        // dispatch(createMessage({deleteLead: "Lead Deleted"}))
          // dispatch(<Redirect to="/detail"/>)
          dispatch({
              type: DETAIL_LEAD,
              payload: res.data,
          });
          // useHistory.push(`/detail`)
          
          
      })
      .catch((err) => console.log(err));
};

export const updateLead = (id, lead) => (dispatch, getState) => {
  axios
      .put(`/api/leads/${id}/`, lead ,tokenConfig(getState))
      .then((res) => {
        // dispatch(createMessage({deleteLead: "Lead Deleted"}))
          dispatch({
              type: UPDATE_LEAD,
              payload: res.data,
          });
      })
      .catch((err) => console.log(err));
};