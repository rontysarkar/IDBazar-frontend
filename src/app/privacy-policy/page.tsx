import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className="md:bg-gray-100 pb-5 pt-1">
      <div className="max-w-7xl mx-auto md:bg-white md:shadow-md md:rounded-xl p-8 md:my-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-600 mb-8">
          In order for the website to provide a safe and useful service, it is
          important for IDBazar to collect, use, and share personal information.
        </p>
        <hr className="mb-8" />
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Collection
          </h2>
          <p className="text-gray-600 mb-4">
            Information posted on IDDokaan is publicly available. If you choose to
            provide us with personal information, you are consenting to the
            transfer and storage of that information on our servers. We collect and
            store the following personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Email address, contact information, and sometimes financial information.</li>
            <li>Computer sign-on data, statistics on page views, traffic and responses.</li>
            <li>Other information including users' IP address and web log data.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Use
          </h2>

          <p className="text-gray-600 mb-4">
            We use users' personal information to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Provide our services</li>
            <li>Resolve disputes and troubleshoot problems</li>
            <li>Encourage safe trading and enforce our policies</li>
            <li>Customize user experience and measure interest</li>
            <li>Improve our services and inform users about updates</li>
            <li>Communicate marketing and promotional offers</li>
            <li>Do other things for users as described when collecting information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Cookie Policy
          </h2>

          <p className="text-gray-600">
            We use cookies to enhance user experience, analyze traffic, and improve
            our services. By using our website, you consent to our use of cookies.
          </p>
        </section>
      </div>
    </section>
  )
}

export default PrivacyPolicy