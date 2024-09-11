import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

// Shallow testing
@Component({
  standalone: true,
  selector: 'app-todos-todo',
  template: '',
})
class TodoComponentMock {
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
}

describe('MainComponent', () => {
  // Create Jest tests
});
