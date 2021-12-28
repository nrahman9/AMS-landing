// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  eventApi:
    'https://ams-backend-stablev1.herokuapp.com/api/v1/Public/latestEvents',
  counterApi: 'https://ams-backend-stablev1.herokuapp.com/api/v1/Dashboard',
  testimonialsAPI:
    'https://ummahtrustedshop.com/api/Testimonials/GetTestimonialsByDepartment/1?fbclid=IwAR34Rk7JS9Ufdya9KH2E2s21RgOb1rJXUhO5hkm7-p63uZiDH86QnGCFQws',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
