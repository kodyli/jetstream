<?php

namespace App\Contracts;

interface UpdatesItems
{
    /**
     * Validate and update the given item.
     *
     * @param  mixed  $user
     * @param  array  $input
     * @return mixed
     */
    public function update($user, array $input);
}