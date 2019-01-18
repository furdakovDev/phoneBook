import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../shared/services/loader.service';
import { LoaderState } from '../../shared/states/loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;
  onHide = false;
  showLoaderComponent = false;

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        if (state.show) {
          this.show = state.show;
          this.showLoader(this.show, this.onHide);
        } else if (!state.show) {
          this.show = state.show;
          this.showLoaderHiding(state.show);
        }
      });
  }

  showLoaderHiding(params) {
    this.onHide = !params;
    setTimeout(() => {
      this.onHide = false;
    }, 1000);
    this.showLoader(this.show, this.onHide);
  }

  showLoader(show, onHide) {
    show || onHide ? this.showLoaderComponent = true : this.showLoaderComponent = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
