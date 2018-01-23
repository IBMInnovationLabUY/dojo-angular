import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSecundarioComponent } from './chat-secundario.component';

describe('ChatSecundarioComponent', () => {
  let component: ChatSecundarioComponent;
  let fixture: ComponentFixture<ChatSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
