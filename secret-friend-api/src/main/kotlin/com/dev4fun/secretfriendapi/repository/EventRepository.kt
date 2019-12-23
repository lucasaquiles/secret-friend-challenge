package com.dev4fun.secretfriendapi.repository

import com.dev4fun.secretfriendapi.domain.Event
import org.springframework.data.repository.CrudRepository

interface EventRepository : CrudRepository<Event, Long>