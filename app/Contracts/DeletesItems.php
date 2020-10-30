<?php

namespace App\Contracts;

interface DeletesItems
{
    /**
     * Validate and create a new team for the given user.
     *
     * @param  mixed  $user
     * @param  array  $input
     * @return mixed
     */
    public function delete($user, array $input);
}