package com.progjoy.saastemplate.core.goals.inbound

import com.progjoy.saastemplate.core.annotation.DDDUseCase
import com.progjoy.saastemplate.core.goals.Goal
import com.progjoy.saastemplate.core.goals.outbound.LoadGoalRepository

@FunctionalInterface
interface FindGoalUseCase {
    fun execute(): List<Goal>
}

@DDDUseCase
class FindGoalUseCaseImpl(
    val goalRepository: LoadGoalRepository,
) : FindGoalUseCase {
    override fun execute(): List<Goal> = goalRepository.find()
}
