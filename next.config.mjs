/** @type {import('next').NextConfig} */
const nextConfig = {
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
  // option:'export',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: ""
          },
        ],
      },
      async redirects() {
        return [
          {
            source: '/home',
            destination: '/',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
 
//   images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'placehold.co',
//           port: ""
//         },
//       ],
//     },
//     async redirects() {
//          return [
//     {
//       source: '*',
//       has: [
//         {
//           type: 'host',
//           value: 'www.myzk.in',
//         },
//       ],
//       destination: 'https://myzk.in', // Or vice versa, depending on which you want
//       permanent: true,
//     }

//   ]
//     },
// };

// export default nextConfig;
