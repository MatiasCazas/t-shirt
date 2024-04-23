import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DesignComponent } from './design/design.component';
import { CustomizationComponent } from './customization/customization.component';

export const routes: Routes = [
    { 
        path: "checkout", 
        component: CheckoutComponent
    },
    { 
        path: "design",
        component: DesignComponent,
    },
    { 
        path: "customize",
        component: CustomizationComponent,
    },
];
