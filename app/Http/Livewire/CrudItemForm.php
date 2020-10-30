<?php

namespace App\Http\Livewire;

use Livewire\Component;

class CrudItemForm extends Component
{
    /**
     * The item instance.
     *
     * @var mixed
     */
    
    public $item;
    /**
     * The component's state.
     *
     * @var array
     */
    public $state = [];
    
    /**
     * Mount the component.
     *
     * @param  mixed  $team
     * @return void
     */
    public function mount($item)
    {
        $this->item = $item;
        $this->state = $item->toArray();
    }
    
    public function render()
    {
        return view('items.crud-item-form');
    }
}
