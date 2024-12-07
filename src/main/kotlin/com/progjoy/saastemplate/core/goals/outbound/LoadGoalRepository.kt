package com.progjoy.saastemplate.core.goals.outbound

import com.progjoy.saastemplate.core.annotation.DDDRepository
import com.progjoy.saastemplate.core.goals.Goal

@DDDRepository
interface LoadGoalRepository {
    fun find(): List<Goal>

    fun find(id: String): Goal?
}
