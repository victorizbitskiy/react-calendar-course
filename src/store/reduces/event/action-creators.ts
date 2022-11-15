import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EventActionCreator = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(EventActionCreator.setGuests(response.data))
    } catch (e) {
      console.log(e);

    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as IEvent[]
      json.push(event)
      dispatch(EventActionCreator.setEvents(json))
      localStorage.setItem('events', JSON.stringify(json))
    } catch (e) {
      console.log(e);

    }
  },
  fetchEvents: (userName: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as IEvent[]
      const currentUserEvents = json.filter(ev => ev.author === userName || ev.guest === userName)
      dispatch(EventActionCreator.setEvents(currentUserEvents))
    } catch (e) {
      console.log(e);

    }
  }
}