import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DesignComponent } from './design/design.component';
import { CustomizationComponent } from './customization/customization.component';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';

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
    {path: "message", component: MessageComponent},
    {path: "footer", component: FooterComponent}
];
