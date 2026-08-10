const quickLinks = [
  "Old Website",
  "My-IIESTS",
  "Samarth eGov Suite",
  "Right To Information",
  "Chief Vigilance Officer",
  "Transcripts/Academic Record Verification",
  "Live Feeds",
  "Annual Report",
];

const instituteServices = [
  "Website & Network Group",
  "Email Service",
  "Email Accounts - Password Change",
  "Alumni Cell",
  "Publicity and Media Cell",
  "Reservation Cell",
  "Internal Complaints Committee",
  "Website Admin Login",
];

const externalLinks = [
  "DASA",
  "Commonwealth",
  "NATA",
  "TEQIP",
  "DAAD Scholarship-WISE",
  "NSP Portal for Scholarship",
  "National Career Service",
  "DST-IIEST Solar PV Hub",
  "Incometax Login Portal",
];

const nationalMissions = [
  "GIAN",
  "NIRF",
  "SPARC",
  "JOSAA",
  "Unnat Bharat Abhiyan",
  "Digital India Programme",
  "Prime Minister Research Fellowship",
];

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-bold text-white">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-xs text-white/90">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-darkest text-white">
      <div className="mx-auto max-w-[1720px] px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-3 text-xs font-bold text-white">Contact</h3>
            <div className="space-y-2 text-xs text-white/90">
              <p>Public Relations</p>
              <p>
                pro@iiests.ac.in +91 (033) 2668 8081 (Direct), 4561/62/63 Extn
                356
              </p>
              <p>Security Control</p>
              <p>+91 93541 93249 / 80171 726491</p>
              <p>Board</p>
              <p>+91 (033) 2668 4561 to 63 | Fax 2668 2916</p>
            </div>
          </div>

          <FooterColumn title="Quick Links" items={quickLinks} />
          <FooterColumn title="Institute Services" items={instituteServices} />
          <FooterColumn title="External Links" items={externalLinks} />
          <FooterColumn title="National Missions" items={nationalMissions} />

          <div className="col-span-2 sm:col-span-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c10ef565570a00f158c0d322988044431b4dfacd?width=438"
              alt="Campus map"
              className="mb-3 h-auto w-full max-w-[219px] rounded-md"
            />
            <p className="text-xs font-medium text-white/90">
              Indian Institute of Engineering Science and Technology,
              Shibpur, Botanic Garden, Howrah — 711103, West Bengal, India
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="text-xs font-medium text-white hover:underline"
          >
            Feedback & Query →
          </a>
          <div className="flex items-center gap-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8ad5c43880570c7b4e33ab44f52fed299a436d68?width=46"
              alt="Facebook"
              className="h-5 w-5"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a7d90c86eaa9c934319004c3044658d140d4d2f2?width=32"
              alt="Twitter"
              className="h-4 w-4"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d97e65a69d6d569f4872f5dbb2bd8fbdcc3399ff?width=30"
              alt="Instagram"
              className="h-4 w-4"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/407860d0ec18c4af73bd3647d6597d6d6e450286?width=100"
              alt="YouTube"
              className="h-8 w-auto"
            />
          </div>
        </div>

        <hr className="my-6 border-white/30" />

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[11px] text-white/90">
          <p>© 2026 IIEST Shibpur. Content owned & maintained by Website Cell.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Visitors: 188</span>
            <span className="hidden h-3 w-px bg-white/40 sm:inline-block" />
            <span>Hits:8,545</span>
            <span className="hidden h-3 w-px bg-white/40 sm:inline-block" />
            <span>Ver:1.0.0</span>
            <span className="hidden h-3 w-px bg-white/40 sm:inline-block" />
            <span>Updated:07/07/2026 (14 hours ago)</span>
            <span className="hidden h-3 w-px bg-white/40 sm:inline-block" />
            <span>Env:Prod</span>
            <span className="hidden h-3 w-px bg-white/40 sm:inline-block" />
            <span>Lang:en</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
