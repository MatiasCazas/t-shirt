import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: "checkout", component: CheckoutComponent},
    {path: "message", component: MessageComponent},
    {path: "footer", component: FooterComponent}
    
];
