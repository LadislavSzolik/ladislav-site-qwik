import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <div class="bg-gray-50 py-10 sm:py-32">
      <div class="max-w-5xl mx-auto px-4">

        <h2 class="text-5xl sm:text-7xl font-bold text-center">Projects</h2>

        <div class="py-14 sm:py-20 flex flex-col gap-24 sm:gap-32 ">

          <div class="flex flex-col items-center gap-2">
            <img src="/images/logos/cs-logo.svg" alt="Credit Suisse logo" height="24" />
            <h3 class="text-4xl sm:text-6xl font-semibold">CSX Mobile Banking</h3>
            <p class="text-lg">Redesign of the mobile banking experience</p>
            <Link class="text-lg text-blue-600" href="/csx-mobile-banking">View project</Link>
            <img class="my-4" src="/images/csx-mobile-banking/csx-app.webp" alt="3 Screens of the final product"
                 width={800}
                 height={593}
                 loading="lazy" decoding="async" />
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <div class="sm:pl-4 flex flex-col text-center sm:text-left items-center sm:items-start gap-2 sm:gap-5">
              <img src="/images/logos/cs-logo.svg" alt="Credit Suisse logo" height="24" />
              <h3 className="text-4xl sm:text-6xl font-semibold">Online payments</h3>
              <p className="text-lg">Redesign of the payment entry for private and business clients</p>
              <p class="text-lg text-blue-400">Coming soon...</p>
            </div>
            <img className="my-4 sm:my-0" src="/images/online-payments/payments.webp" alt="Payment entry screen"
                 width={650}
                 height={449}
                 loading="lazy" decoding="async" />
          </div>

          <div className="flex flex-col sm:flex-row-reverse items-center">
            <div className="sm:pl-8 flex flex-col text-center sm:text-left items-center sm:items-start gap-2 sm:gap-5">
              <img src="/images/logos/cs-logo.svg" alt="Credit Suisse logo" height="24" />
              <h3 className="text-4xl sm:text-6xl font-semibold">Banking design system</h3>
              <p className="text-lg">Create design system for web and mobile banking</p>
              <p className="text-lg text-blue-400">Coming soon...</p>
            </div>
            <img className="my-4 sm:my-0" src="/images/banking-design-system/design-system.webp" alt="Web design system in Sketch"
                 width={650}
                 height={548}
                 loading="lazy" decoding="async" />
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <div className="sm:pl-4 flex flex-col text-center sm:text-left items-center sm:items-start gap-2 sm:gap-5">
              <img src="/images/logos/greenwiperz-logo.svg" alt="Greenwiperz logo" height="24" />
              <h3 className="text-4xl sm:text-6xl font-semibold">Booking system</h3>
              <p className="text-lg">Design and develop an online car wash booking system with payments</p>
              <p className="text-lg text-blue-400">Coming soon...</p>
            </div>
            <img className="my-4 sm:my-0" src="/images/greenwiperz/greenwiperz-app.webp" alt="Greenwiperz overview of the bookings"
                 width={650}
                 height={450}
                 loading="lazy" decoding="async" />
          </div>

          <div className="flex flex-col sm:flex-row-reverse items-center">
            <div className="sm:pl-8 flex flex-col text-center sm:text-left items-center sm:items-start gap-2 sm:gap-5">
              <img src="/images/logos/ooofer-logo.svg" alt="Ooofer logo" height="24" />
              <h3 className="text-4xl sm:text-6xl font-semibold">Partner platform</h3>
              <p className="text-lg">Design and develop a responsive web app for partners on-boarding</p>
              <p className="text-lg text-blue-400">Coming soon...</p>
            </div>
            <img className="my-4 sm:my-0" src="/images/ooofer-partner/ooofer-partner.webp" alt="Web design system in Sketch"
                 width={650}
                 height={446}
                 loading="lazy" decoding="async" />
          </div>


          <div className="flex flex-col items-center gap-2 sm:gap-4">
            <h3 className="text-4xl sm:text-6xl font-semibold">Digital illustrations</h3>
            <p className="text-lg">Illustrated 100 different sport throughout 100 days</p>
            <img className="mt-4 shadow-2xl rounded-2xl" src="/images/illustrations/drawings.webp" alt="3 Screens of the final product"
                 width={800}
                 height={593}
                 loading="lazy" decoding="async" />
          </div>

        </div>
      </div>
    </div>
  );
});
