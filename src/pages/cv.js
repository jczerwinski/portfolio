import './cv.css';

import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout/'

import Img from 'gatsby-image'

import { Badge } from 'reactstrap'

import { rhythm } from '../utils/typography'

import { parsePhoneNumberFromString as parseTn } from 'libphonenumber-js'

import color from '../utils/stringColor'

let data = {
  "basics": {
    "name": "Jamie Czerwinski",
    "label": "Software Engineer and Data Scientist",
    "picture": "",
    "email": "jamie.czerwinski@gmail.com",
    "phone": "+17809087687",
    "website": "http://jczerwinski.github.io",
    "summary": "",
    "location": {
      "city": "Edmonton",
      "region": "Alberta",
      "country": "Canada"
    }/*
    "profiles": [{
      "network": "Twitter",
      "username": "jczerwinski",
      "url": "http://twitter.com/jczerwinski"
    }]*/
  },
  "work": [{
    "company": "TELUS",
    "team": "Consumer Products and Services",
    "position": "Data Scientist",
    "website": "http://www.telus.com",
    "startDate": "2019-03-01",
    "endDate": "present",
    "summary": "Responsible for measuring and driving the performance of the TELUS Consumer Wi-Fi portfolio by generating actionable insights from data.",
    "highlights": [
      "Engineered fully automated analytic data products from petabytes of raw transactional and operational data in support of the TELUS Consumer Wi-Fi program.",
      "Designed, developed, executed, and reported on customer Wi-Fi reliability experiments that helped guide millions of dollars in capital investment.",
      "Designed and developed visualizations and dashboards to enable program and product managers with self-serve analytic and monitoring capabilities.",
      "Enabled team capabilities by developing and sharing custom tooling for the TELUS hadoop cluster."
    ],
    "xp": ['software engineering', 'data science', 'hadoop', 'hive', 'python', 'oozie', 'spark', 'scala', 'tableau', 'sas', 'bash', 'batch', 'powershell', 'agile', 'jira', 'google suite', 'excel', 'microsoft office', 'data analysis', 'remote/distributed teamwork', 'experiment design', 'research', 'requirements analysis', 'git', 'dashboard development', 'web analytics', 'telecommunications', 'unix', 'kpi development']
    },{
      "company": "TELUS",
      "team": "Broadband Networks Business Intelligence",
      "position": "Business Systems Analyst",
      "website": "http://www.telus.com",
      "startDate": "2017-07-01",
      "endDate": "2019-02-28",
      "summary": "Business Systems Analyst for the TELUS PureFibre build portfolio. Responsible for designing and developing applications and data products, championing agile methodologies, and leading team development in support of the TELUS PureFibre build program.",
      "highlights": [
        "Led the end-to-end design, development, delivery, and 24/7 production support of a number of operational support systems focused on improving TELUS' fibre service drop inventory.",
        "Led the migration of my team's application and data infrastructure from a staging environment to a development environment.",
        "Proactively designed, built consensus for, and implemented a streamlined BI team front-door website and process.",
        "Designed and developed an executive team scorecard and meeting agenda dashboard as a mobile-accessible web application."
      ],
      "xp": ['javascript', 'react', 'html', 'css', 'sass', 'less', 'orm', 'php', 'apache', 'sql', 'sql server', 'windows server', 'ssis', 'hadoop', 'hive', 'python', 'spark', 'bash', 'batch', 'powershell', 'project management', 'agile', 'jira', 'openshift', 'kubernetes', 'devops', 'ci', 'node.js', 'koa.js', 'git', 'tfs', 'tableau', 'domo', 'google analytics', 'google cloud api', 'google suite', 'data analysis', 'remote/distributed teamwork', 'requirements analysis', 'change management', 'web analytics', 'telecommunications', 'unix', 'bash', 'kpi development', 'geographic information systems (gis)']
    },{
      "company": "TELUS",
      "team": "Customer Experience Help Desk",
      "position": "Reporting and Systems Analyst",
      "website": "http://www.telus.com",
      "startDate": "2014-01-01",
      "endDate": "2017-06-30",
      "summary": "Systems and reporting prime. Designed, developed, and maintained application systems and reporting in support of the Help Desk and Customer Experience teams.",
      "highlights": [
        "Evolved and maintained the Help Desk tracker web application, improving agent productivity and measurement capabilities.",
        "Designed and developed new team performance metrics, including 'search first' compliance and repeat call rates.",
        "Developed and delivered monthly and quarterly team performance and trend reporting.",
        "Designed, developed, and maintained a real-time product bundle quotation web application, significantly improving the ability of agents to quickly and accurately quote, close, and record bundle offers made to customers."
      ],
      "xp": ['javascript', 'backbone.js', 'html', 'css', 'sass', 'microsoft iis', 'vb.net', 'microsoft access', 'sql', 'windows server', 'batch', 'apache', 'project management', 'agile', 'jira', 'node.js', 'git', 'piwik analytics', 'remote/distributed teamwork', 'web analytics', 'telecommunications', 'excel', 'microsoft office', 'client service', 'kpi development']
    },{
      "company": "TELUS",
      "team": "Customer Experience Help Desk",
      "position": "Help Desk Analyst",
      "website": "http://www.telus.com",
      "startDate": "2010-10-01",
      "endDate": "2013-12-31",
      "summary": "Responsible for supporting, mentoring, coaching, and training TELUS consumer wireline customer care agents to provide a world-class customer experience.",
      "highlights": [
        "Consistent top performer as measured by quality (agent satisfaction surveys) and productivity (interaction volume)."
      ],
      "xp": ['remote/distributed teamwork', 'microsoft office', 'telecommunications', 'client service']
    },{
      "company": "TELUS",
      "team": "Customer Experience",
      "position": "Customer Care Representative",
      "website": "http://www.telus.com",
      "startDate": "2010-05-01",
      "endDate": "2010-09-30",
      "summary": "Responsible for providing sales and service support to TELUS consumer wireline customers.",
      "highlights": [
        "Supported TELUS consumer wireline clients with a world-class customer experience.",
        "Consistent top performer as measured by sales, productivity, and quality."
      ],
      "xp": ['microsoft office', 'telecommunications', 'client service', 'sales']
    }],
  "community": [
    {
      "company": "Athabasca University Graduate Students' Association",
      "position": "Faculty Representative and Council Member",
      "website": "http://www.augsa.com",
      "startDate": "2018-05-01",
      "endDate": "2019-04-30",
      "summary": "Represented AU's Faculty of Science and Technology graduate students at AUGSA Council.",
      "highlights": [
        "Represented AUGSA to ab-GPAC as Treasurer.",
        "Provided continuity on Council from previous year's executive team."
      ],
      "xp": ['project management', 'google suite', 'remote/distributed teamwork', 'microsoft office', 'governance']
      },{
        "company": "Alberta Graduate Provincial Advocacy Council (ab-GPAC)",
        "position": "Treasurer",
        "website": "http://www.abgpac.net",
        "startDate": "2018-05-01",
        "endDate": "2019-04-30",
        "summary": "Responsible for financial management of ab-GPAC.",
        "highlights": [
          "Recruited to return as Treasurer to provide organizational continuity.",
          "Led the budgeting, financial control, financial reporting, and financial policy development of the organization",
          "Transitioned the organization's financial systems to Quickbooks Online, improving the organization's transition process and remote collaboration capabilities."
        ],
        "xp": ['project management', 'policy', 'governance', 'google suite', 'budgeting', 'financial control', 'financial reporting', 'financial accounting', 'strategic planning', 'remote/distributed teamwork']
    },{
      "company": "Athabasca University Graduate Students' Association (AUGSA)",
      "position": "President",
      "website": "http://www.augsa.com",
      "startDate": "2017-05-01",
      "endDate": "2018-04-30",
      "summary": "Responsible for advocacy and engagement leadership for Athabasca University's graduate students.",
      "highlights": [
        "Increased awareness of graduate student issues on the AU Board of Governors by proactively identifying and measuring graduate student priorities, and presenting the results in a grad student KPI dashboard.",
        "Enhanced student engagement by redesigning our email newsletter, resulting in a 400% increase in content penetration. Leveraged this improvement to drive increased student engagement in key priorities.",
        "Led AUGSA’s council and staff team through bylaw and policy development, strategic planning, budgeting, and a website redesign and migration.",
                "Led graduate student advocacy efforts at Alberta Advanced Education consultations, with a focus on creative and practical approaches to a sustainable and responsive adult learning environment."
      ],
      "xp": ['communications', 'email campaigns', 'html', 'css', 'project management', 'google suite', 'remote/distributed teamwork', 'governance', 'advocacy', 'microsoft office', 'kpi development', 'strategic planning', 'budgeting', 'financial control']
    },{
      "company": "Athabasca University Graduate Students' Association (AUGSA)",
      "position": "Vice-President External",
      "website": "http://www.augsa.com",
      "startDate": "2016-05-01",
      "endDate": "2017-04-30",
      "summary": "Responsible for advocating to the federal and provincial governments on behalf of Athabasca University graduate students.",
      "highlights": [
        "Led AUGSA's delegations to the Canadian Alliance of Students' Associations (CASA) and to the Alberta Graduate Provincial Advocacy Council (ab-GPAC).",
        "As Chair of CASA's Graduate Council, coordinated the development and review of a number of graduate-student focused federal advocacy policies and position papers."
      ],
      "xp": ['advocacy', 'project management', 'policy', 'governance', 'google suite', 'microsoft office']
    },{
      "company": "Alberta Graduate Provincial Advocacy Council (ab-GPAC)",
      "position": "Treasurer",
      "website": "http://www.abgpac.net",
      "startDate": "2016-05-01",
      "endDate": "2017-04-30",
      "summary": "Responsible for financial management of ab-GPAC and leading graduate student advocacy to the Government of Alberta.",
      "highlights": [
        "Led Alberta's graduate student advocacy to the Government of Alberta's reviews of tuition and post-secondary funding. Consulted with and surveyed students, led the development of our advocacy position, and organized and attended advocacy meetings with government and university officials. These efforts directly contributed to policy and legislation that closely aligned with our advocacy.",
        "Led the budgeting, financial control, financial reporting, and financial policy development of the organization",
        "Transitioned the organization and its directors to Google Suite, significantly simplifying our collaborative and administrative work.",
      ],
      "xp": ['advocacy', 'project management', 'policy', 'governance', 'google suite', 'budgeting', 'financial control', 'strategic planning']
    }],
  "education": [{
    "institution": "Athabasca University",
    "area": "Information Systems",
    "studyType": "Master of Science",
    "startDate": "2016-01-01",
    "endDate": "present",
    "summary": "Focus on data science, user experience design, and geographic information systems (GIS).",
    "xp": ["java", "python", "javascript", "html", "css", "c", "matlab", "octave", "machine learning", "reinforcement learning", "mathematics", "calculus", "statistics", "probability models", "geographic information systems (gis)"]
    },{
      "institution": "University of Alberta",
      "area": "Computing and Mathematical Sciences",
      "studyType": "Bachelor of Science",
      "startDate": "2007-09-01",
      "endDate": "2011-08-31",
      "courses": [
        "DB1101 - Basic SQL"
      ],
      "xp": ["java", "python", "javascript", "html", "css", "c", "matlab", "octave", "machine learning", "reinforcement learning", "mathematics", "calculus", "statistics", "probability models", ""]
    }]
};

class CV extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const tn = parseTn(data.basics.phone)    
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        <section style={{textAlign: 'center'}}>
          <section style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h1 style={{marginBottom: '3rem'}}>Curriculum Vitae</h1>
          </section>
          <section className="cv">
            <address>
              <span style={{fontSize: "2em"}}>{data.basics.name}</span><br />
              <span style={{fontSize: "1.2em"}}>{data.basics.label}</span><br /><br />
              <span>{`${data.basics.location.city}, ${data.basics.location.region}, ${data.basics.location.country}`}</span><br /><br />
              <a href={data.basics.website}>{data.basics.website}</a><br />
              <a href={`mailto:${data.basics.email}`}>{data.basics.email}</a><br />
              <a href={tn.getURI()}>{tn.formatNational()}</a><br />
            </address>
            <section className="work">
              <h3 style={{marginBottom: '1.62em'}}>Professional Experience</h3>
              {data.work.map(w => 
                <section style={{textAlign: 'left', marginBottom: '1.62em'}}>
                  <header style={{marginBottom: '.62em'}}>
                    <h4>{w.position}</h4>
                    <h5>{w.company} - {w.team}</h5>
                    <div>{w.startDate} to {w.endDate}</div>
                  </header>
                  <div style={{fontStyle: 'italic', marginBottom: '.62em'}}>{w.summary}</div>
                  <details>
                  <summary>Details</summary>
                  <ul>
                    {w.highlights.map(h => <li>{h}</li>)}
                  </ul>
                  <div>Experience with: <span style={{fontStyle: 'italic'}}>{w.xp.join(', ')}</span></div>
                  </details>
                </section>
              )}
            </section>
            <section className="education">
              <h3 style={{marginBottom: '1.62em'}}>Educational Experience</h3>
              {data.education.map(e => 
                <section style={{textAlign: 'left', marginBottom: '1.62em'}}>
                  <header style={{marginBottom: '.62em'}}>
                    <h4>{e.studyType} - {e.area}</h4>
                    <h5>{e.institution}</h5>
                    <div>{e.startDate} to {e.endDate}</div>
                  </header>
                  {/*<div style={{fontStyle: 'italic', marginBottom: '.62em'}}>{w.summary}</div>
                  <ul>
                    {w.highlights.map(h => <li>{h}</li>)}
                  </ul>*/}
                  <div>Experience with: <span style={{fontStyle: 'italic'}}>{e.xp.join(', ')}</span></div>
                </section>
              )}
            </section>
          </section>
        </section>
      </Layout>
    )
  }
}

export default CV

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
