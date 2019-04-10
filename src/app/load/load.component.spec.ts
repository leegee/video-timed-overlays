import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadComponent } from './load.component';
import { VideoService } from '../video.service';

describe('LoadComponent', () => {
  let component: LoadComponent;
  let fixture: ComponentFixture<LoadComponent>;
  let videoService: VideoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadComponent],
      providers: [VideoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadComponent);
    component = fixture.componentInstance;
    videoService = fixture.debugElement.injector.get(VideoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click button to call load', () => {
    spyOn(videoService, 'setUri').and.returnValue(true);
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(videoService.setUri).toHaveBeenCalled();
  });

});
