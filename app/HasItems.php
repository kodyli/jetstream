<?php

namespace App;

trait HasItems
{
    /**
     * The item model that should be used by Pigeon.
     *
     * @var string
     */
    public static $itemModel = 'App\Models\Item';

    
    /**
     * Get all of the items the user owns.
     */
    public function ownedItems()
    {
        return $this->hasMany(HasItems::$itemModel);
    }
    
    /**
     * Determine if the user owns the given item.
     *
     * @param  mixed  $team
     * @return bool
     */
    public function ownsTeam($item)
    {
        return $this->id == $item->user_id;
    }
}