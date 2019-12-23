package com.dev4fun.secretfriendapi.domain

import javax.persistence.Embeddable

@Embeddable
data class EventOwner(

    val name: String,
    val email:String
)
