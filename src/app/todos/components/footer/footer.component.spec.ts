import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TodosService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let todosService: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [
        provideHttpClient(), // Provide the HttpClient along with HttpClientTesting
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    todosService = TestBed.inject(TodosService);
    fixture.detectChanges();
  });

  it('creates a component', () => {
    expect(component).toBeTruthy();
  });

  describe('counters', () => {
    it('renders counter for 1 todo', () => {
      todosService.todosSig.set([{ id: '1', text: 'foo', isCompleted: false }]);
      fixture.detectChanges();
      const todoCount = fixture.debugElement.query(
        By.css('[data-testid="todoCount"]')
      );
      expect(todoCount.nativeElement.textContent).toContain('1 item left');
    });
  });
});
