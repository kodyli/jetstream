<?php

namespace App\Actions;

use App\Contracts\CreatesTeams;
use Illuminate\Support\Facades\Validator;

class CreateItem implements CreatesItems
{
    /**
     * Validate and create a new team for the given user.
     *
     * @param  mixed  $user
     * @param  array  $input
     * @return mixed
     */
    public function create($user, array $input)
    {
        Gate::forUser($user)->authorize('create', Jetstream::newTeamModel());

        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
        ])->validateWithBag('createTeam');

//        return $user->ownedTeams()->create([
//            'name' => $input['name'],
//            'personal_team' => false,
//        ]);
    }
}