import { Component } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-firebase/crashlytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    setTimeout(() => {
      this.isCrashlyticsEnabled();
    }, 10000);
  }

  async isCrashlyticsEnabled() {
    const result = await FirebaseCrashlytics.isEnabled();
    return result.enabled;
  };
}
