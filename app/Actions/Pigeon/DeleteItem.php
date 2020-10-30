<?php

namespace App\Actions;

use App\Contracts\DeletesItems;
use Illuminate\Support\Facades\Validator;

class DeleteItem implements DeletesItems
{
    /**
     * Delete the given item.
     *
     * @param  mixed  $item
     * @return void
     */
    public function delete($item)
    {
        //$team->purge();
    }
}