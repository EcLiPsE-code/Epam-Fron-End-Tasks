'use strict'

class Event{
    dateEvent;
    timeEvent;
    nameEvent;
    degreeEvent;
    notesEvent;
    /**
     *
     * @param dataEvent {Date}
     * @param timeEvent {Date}
     * @param nameEvent {String}
     * @param degreeEvent {String}
     * @param notesEvent {String}
     */
    constructor(dataEvent, timeEvent,
                nameEvent, degreeEvent, notesEvent) {
        this.dateEvent = dataEvent
        this.timeEvent = timeEvent
        this.nameEvent = nameEvent
        this.degreeEvent = degreeEvent
        this.notesEvent = notesEvent
    }

    get dateEvent(){return this.dateEvent}
    get timeEvent(){return this.timeEvent}
    get nameEvent(){return this.nameEvent}
    get degreeEvent(){return this.degreeEvent}
    get notesEvent(){return this.notesEvent}

    set dateEvent(value){this.dateEvent = value}
    set timeEvent(value){this.timeEvent = value}
    set nameEvent(value){this.nameEvent = value}
    set degreeEvent(value){this.degreeEvent = value}
    set notesEvent(value){this.notesEvent = value}
}