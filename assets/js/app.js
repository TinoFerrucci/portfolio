// ==================== PREFERENCES ====================
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Cross-fades a repaint that touches most of the page. Unsupported browsers and
// anyone who asked for less motion get the plain mutation, same end state.
function withViewTransition(mutate) {
    if (typeof document.startViewTransition !== 'function' || reduceMotion.matches) {
        mutate();
        return;
    }
    document.startViewTransition(mutate);
}

// ==================== i18n ====================
// English is the source of truth and lives inline in the HTML (so the page is
// readable with JS off and indexable in English). This table holds both locales
// because switching back to EN needs the strings too.
const I18N = {
    en: {
        "hero.name": "Constantino<br>Ferrucci",
        "hero.projects": "View projects",
        "hero.base": "Montevideo <span>Uruguay</span>",
        "hero.status": "<span class=\"status-inline\"><span class=\"status-dot\" aria-hidden=\"true\"></span>Open to international roles</span>",
        "hero.portrait": "Portrait of Constantino Ferrucci",
        "hero.summary": "Current profile summary",
        "about.focus": "What I do",
        "fig.label": "FIG 01 &middot; REFERENCE AGENT ARCHITECTURE",
        "fig.heading": "How I structure agent systems: planning, delegation, tools and review",
        "fig.traces_offline_evals_inform_routing_opentelemetry": "Traces + offline evals inform routing (OpenTelemetry)",
        "fig.01": "01",
        "fig.request": "Request",
        "fig.user_goal_enters": "User goal enters",
        "fig.the_graph": "the graph",
        "fig.02": "02",
        "fig.supervisor_langgraph": "Supervisor (LangGraph)",
        "fig.stateful_graph_plans_steps_and_routes_work": "Stateful graph plans steps and routes work",
        "fig.03a": "03a",
        "fig.retrieval_agent": "Retrieval agent",
        "fig.hybrid_search_over": "Hybrid search over",
        "fig.documents": "documents",
        "fig.03b": "03b",
        "fig.data_agent": "Data agent",
        "fig.sql_behind_a": "SQL behind a",
        "fig.read_only_guard": "read-only guard",
        "fig.03c": "03c",
        "fig.tool_agent": "Tool agent",
        "fig.calls_apis_and": "Calls APIs and",
        "fig.services": "services",
        "fig.a2a_agent_cards_task_delegation": "A2A: agent cards, task delegation",
        "fig.mcp_tool_layer": "MCP tool layer",
        "fig.fastmcp_servers": "FastMCP servers",
        "fig.rest_harr_mcp": "REST &harr; MCP",
        "fig.typed_schemas_pydantic": "Typed schemas (Pydantic)",
        "fig.autogen_review_loop": "AutoGen review loop",
        "fig.planner_and_critic_agents": "Planner and critic agents",
        "fig.check_the_draft": "check the draft",
        "fig.04": "04",
        "fig.answer": "Answer",
        "fig.cited_validated_returned": "Cited, validated, returned",
        "fig.traces_offline_evals_inform": "Traces + offline evals inform",
        "fig.routing_opentelemetry": "routing (OpenTelemetry)",
        "fig.user_goal_enters_the_graph": "User goal enters the graph",
        "fig.stateful_graph_plans_steps": "Stateful graph plans steps",
        "fig.and_routes_work": "and routes work",
        "fig.hybrid_search_over_documents": "Hybrid search over documents",
        "fig.sql_behind_a_read_only_guard": "SQL behind a read-only guard",
        "fig.calls_apis_and_services": "Calls APIs and services",
        "fig.wide": "FIG 01: Reference agent architecture",
        "fig.vertical": "FIG 01: Vertical reference agent architecture",
        "fig.wideDesc": "01 Request enters 02 Supervisor (LangGraph), which plans and routes work across 03a Retrieval agent, 03b Data agent, and 03c Tool agent linked via A2A agent cards and task delegation. Agents call the MCP tool layer bidirectionally (FastMCP servers, REST to MCP, typed Pydantic schemas), while drafts flow from the agents row into the AutoGen review loop and 04 Answer. Dashed OpenTelemetry traces and offline evaluations return to Supervisor.",
        "fig.verticalDesc": "Vertical flow from 01 Request to 02 Supervisor (LangGraph), through 03a Retrieval agent, 03b Data agent, and 03c Tool agent connected by A2A delegation, with bidirectional calls to the MCP tool layer and drafts routed from the agents into the AutoGen review loop and 04 Answer, plus a dashed OpenTelemetry feedback loop returning to Supervisor.",
        "fig.step1": "01 Request: User goal enters the graph.",
        "fig.step2": "02 Supervisor (LangGraph): Stateful graph plans steps and routes work to three specialist agents.",
        "fig.step3": "03a Retrieval agent: Hybrid search over documents. 03b Data agent: SQL behind a read-only guard. 03c Tool agent: Calls APIs and services. Agents coordinate via A2A agent cards and task delegation, and exchange calls bidirectionally with the MCP tool layer (FastMCP servers, REST to MCP, and typed Pydantic schemas).",
        "fig.step4": "AutoGen review loop: Draft outputs flow from the agents into planner and critic agents before returning.",
        "fig.step5": "04 Answer: Cited, validated, returned. OpenTelemetry traces and offline evaluations inform how routing gets revised.",
        "fig.loop": "<strong>LOOP:</strong> Traces and offline evals are how routing gets revised.",
        "about.evidence.exp-wiener": "Evidence: <a href=\"#exp-wiener\">Wiener lab.</a>, <a href=\"#exp-apple\">Apple</a>",
        "about.evidence.exp-apple": "Evidence: <a href=\"#exp-apple\">Apple</a>, <a href=\"#project-datagentra\">Datagentra</a>, <a href=\"#project-fastmcp\">fastapi-fastmcp-autogen</a>",
        "about.evidence.project-dog-pipeline": "Evidence: <a href=\"#project-dog-pipeline\">UNR pipeline</a>, <a href=\"#exp-unr-cv\">UNR Computer Vision</a>, <a href=\"#exp-unr-nlp\">UNR NLP</a>",

        'nav.home': 'Home', 'nav.chat': 'Assistant', 'nav.about': 'About', 'nav.skills': 'Stack',
        'nav.exp': 'Experience', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
        'nav.lang': 'Cambiar a español', 'nav.langShort': 'ES',
        'nav.themeLight': 'Switch to light theme', 'nav.themeDark': 'Switch to dark theme',

        'hero.tag': 'Open to international opportunities',
        'hero.sub': "I build RAG and agent systems, and I teach Computer Vision.",
        'hero.ctaChat': "Ask my assistant",
        'hero.ctaCv': "Download CV",
        'hero.title': "Senior GenAI Engineer.",
        'hero.nowLabel': "Currently", 'hero.now': "Apple <span>contractor via TCS</span>",
        'hero.teachLabel': "Teaching", 'hero.teach': "UNR <span>Computer Vision</span>",
        'hero.baseLabel': "Based in", 'hero.statusLabel': "Status",

        'sk.retrieval': 'Retrieval', 'sk.orch': 'Orchestration',
        'sk.rel': 'Reliability &amp; evaluation', 'sk.serving': 'Models &amp; serving',
        'sk.frameworks': 'Frameworks', 'sk.cv': 'Computer Vision', 'sk.nlp': 'NLP', 'sk.eval': 'Evaluation',
        'sk.apis': 'APIs &amp; services', 'sk.data': 'Data &amp; storage', 'sk.front': 'Front end',
        'sk.deploy': 'Containers &amp; deploy', 'sk.ci': 'Platform &amp; CI',
        'sk.obs': 'Observability', 'sk.dev': 'Daily drivers',
        'flow.label': 'the pipeline i ship',
        'flow.caption': 'How a question becomes an answer you can trace back to a source',
        'flow.n1': 'Query', 'flow.d1': 'Rewritten and expanded before it ever hits the index',
        'flow.n2': 'Retrieve', 'flow.d2': 'Hybrid: semantic + keyword, filtered by metadata',
        'flow.n3': 'Re-rank', 'flow.d3': 'Cross-encoder trims dozens of candidates to a handful',
        'flow.n4': 'Ground', 'flow.d4': 'Controlled context injection, aligned to business rules',
        'flow.n5': 'Answer', 'flow.d5': 'Cited, traceable, and scored by the eval suite',
        'flow.loop': 'Evaluation, observability and feedback loops run back into retrieval &mdash; that is the part that keeps quality from drifting.',
        'cmd.title': 'Command palette', 'cmd.open': 'Open command palette',
        'cmd.placeholder': 'Jump to a section, ask a question, change the theme…',
        'cmd.nav': 'navigate', 'cmd.run': 'run', 'cmd.close': 'close',
        'cmd.empty': 'Nothing matches that.',
        'cmd.gNav': 'Go to', 'cmd.gAsk': 'Ask the assistant',
        'cmd.gSet': 'Settings', 'cmd.gLinks': 'Elsewhere',
        'cmd.theme': 'Toggle light / dark theme', 'cmd.lang': 'Switch to Spanish',
        'cmd.cv': 'Download CV', 'cmd.github': 'Open GitHub', 'cmd.linkedin': 'Open LinkedIn',
        'cmd.email': 'Send an email',
        'exp.label': 'what i do',
        'exp.title': 'Beyond the demo',
        'exp.desc': 'Most GenAI projects die between the notebook and production. My work is the part that comes after: making retrieval accurate, answers traceable, and the whole thing stable under real load.',
        'exp.p1t': "Retrieval and evaluation",
        'exp.p1d': "Search systems over technical manuals, PDFs, and databases combine hybrid search, metadata filters, and re-ranking so answers trace back to their sources. Grounding checks and business-rule filters keep responses tied to verified records.",
        'exp.p2t': "Agents, MCP and the backend behind them",
        'exp.p2d': "Tool-calling agent workflows on LangChain, LangGraph, and MCP connect language models to APIs and databases. These services ship with FastAPI and Docker for container deployment.",
        'exp.p3t': "Computer vision and teaching",
        'exp.p3d': "The three-stage course pipeline covers similarity search, classification, and object detection. In the UNR vision pipeline, I evaluate similarity search with NDCG@10. Teaching at UNR covers Computer Vision today and previously covered Natural Language Processing.",

        'chat.label': 'ask me anything',
        'chat.title': 'Talk to my assistant',
        'chat.desc': 'It knows my background, my stack and my projects. Ask it anything you would ask me in a first call &mdash; or pick one of the questions below.',
        'chat.loading': 'Waking up the assistant…',
        'chat.model': 'Model', 'chat.clear': 'Clear',
        'chat.provider': 'Model provider', 'chat.modelLabel': 'Language model',
        'chat.assistant': 'Assistant', 'chat.you': 'You', 'chat.thinking': 'Thinking…',
        'chat.greeting': "Hi! I'm Constantino's assistant. Ask me about his experience with production RAG systems, the stack he works with, what he teaches at UNR, or how to reach him.",
        'chat.s1': 'What is he working on at Apple?',
        'chat.s2': 'How does he build RAG for production?',
        'chat.s3': 'What does he teach at UNR?',
        'chat.s4': 'Is he open to relocating?',
        'chat.inputLabel': 'Your question',
        'chat.placeholder': 'Ask something…',
        'chat.send': 'Send message',
        'chat.ready': '%n models available',
        'chat.pick': 'Pick a provider and a model to start.',
        'chat.failed': 'Could not load the models. Please reload the page.',
        'chat.err': 'I could not answer: %m. Try again, or pick another model.',
        'chat.empty': '(empty response)',

        'about.label': "About",
        'about.title': "About me",
        'about.p1': "My path in applied AI began with three years at <strong>Wiener lab.</strong>, where I built internal assistants for technical support and customer service, along with document computer vision and data pipelines for clinical laboratory workflows. Today, contractor work with <strong>Apple</strong> through Tata Consultancy Services connects language models to enterprise data, APIs, and internal workflows using LangChain, LangGraph, and MCP.",
        'about.p2': "At the <strong>Universidad Nacional de Rosario</strong>, I teach Computer Vision as an Auxiliar de Primera and previously taught Natural Language Processing on the same degree.",
        'about.p3': "An earlier secondary technical degree in electromechanics led to the Tecnicatura Universitaria en Inteligencia Artificial from UNR, and the Licenciatura en Inteligencia Artificial is currently in progress.",
        'about.p4': 'Before software I completed a secondary technical degree in electromechanics; since 2022 I\'ve worked full-time in AI engineering.',
        'about.s1': 'Years in AI engineering', 'about.s2': 'UNR courses taught',
        'about.s3': 'Worked across', 'about.s4': 'Professional working',

        'skills.label': 'tech stack', 'skills.title': 'The stack, with receipts',
        'skills.desc': 'Four areas, broken down the way I actually think about them &mdash; not one flat wall of logos. Each card ends with where you can see it running.',
        'skills.proof1': 'Shipped in SynergyX-AI, Datagentra and fastapi-fastmcp-autogen.',
        'skills.proof2': 'Every project on this page runs on this stack.',
        'skills.proof3': 'I teach this at UNR — the dog-recognition pipeline is mine.',
        'skills.proof4': "This site's assistant runs on a Cloudflare Worker.",
        'skills.g1': 'GenAI &amp; LLM systems', 'skills.g2': 'ML, CV &amp; NLP',
        'skills.g3': 'Backend &amp; data', 'skills.g4': 'Infra &amp; tooling',

        'tl.label': 'track record', 'tl.title': "Where I've worked",
        'tl.desc': 'Two tracks running in parallel: building AI systems in industry, and teaching them at the Universidad Nacional de Rosario.',
        'tl.d1': 'May 2026 — Present', 'tl.t1': 'Senior Generative AI Engineer',
        'tl.c1': 'Apple (contractor) via Tata Consultancy Services · Montevideo, Uruguay',
        'tl.b1': 'Production-grade GenAI automations for business and IT use cases, built alongside automation architects, product owners and business stakeholders. End-to-end intelligent workflows combining LLMs with APIs, scripts, RPA and event-driven flows; agent-based workflows (task planning, tool use, decision-making) on LangChain, LangGraph and MCP; RAG pipelines over vector databases for enterprise knowledge grounding; prompt engineering, structured outputs and guardrails, plus security, compliance and responsible-AI controls through rollout and monitoring.',
        'tl.d2': 'Oct 2024 — Present', 'tl.t2': 'Auxiliar de Primera — Computer Vision',
        'tl.c2': 'Universidad Nacional de Rosario · Rosario, Argentina',
        'tl.b2': 'Teaching Computer Vision in the Tecnicatura Universitaria en Inteligencia Artificial: fundamentals plus hands-on assignments in Python, PyTorch, OpenCV and Hugging Face Transformers. I authored the practical three-stage pipeline students build on, and work with faculty on curriculum and assessments.',
        'tl.d3': 'Jun 2023 — Apr 2026', 'tl.t3': 'AI Developer',
        'tl.c3': 'Wiener lab. · Rosario, Argentina',
        'tl.b3': 'LLM-driven solutions for technical support, customer service and product-knowledge automation, grounded on internal documentation, technical manuals, PDFs, relational databases and search engines. RAG architectures combining vector search, metadata filtering and business rules to raise answer accuracy; data pipelines for ingesting and normalizing medical and technical data; integration with internal APIs, enterprise systems and authentication layers.',
        'tl.d4': '2022 — 2024', 'tl.t4': 'Tecnicatura Universitaria en Inteligencia Artificial',
        'tl.c4': 'Universidad Nacional de Rosario',
        'tl.b4': 'University degree in Artificial Intelligence: deep learning, computer vision, NLP and industrial applications.',

        'tl.pro': 'Professional', 'tl.aca': 'Academic &amp; teaching',
        'tl.d5': 'Oct 2024 — May 2026', 'tl.t5': 'Auxiliar de Primera — NLP',
        'tl.c5': 'Universidad Nacional de Rosario · Rosario, Argentina',
        'tl.b5': 'Nineteen months teaching Natural Language Processing on the same degree: fundamentals, embeddings, transformers and applied language modelling, plus course material and practical assessments.',
        'tl.d7': '2024 — Present', 'tl.t7': 'Licenciatura en Inteligencia Artificial',
        'tl.c7': 'Universidad Nacional de Rosario',
        'tl.b7': "Bachelor's degree in Artificial Intelligence, in progress — the continuation of the technical degree completed in 2024.",
        'tl.d6': '2014 — 2020', 'tl.t6': 'Secondary technical degree in electromechanics',
        'tl.c6': 'EETP N° 466 Manuel N. Savio · Rosario, Argentina',
        'tl.b6': 'Secondary technical degree (EETP N° 466).',
        'pr.label': 'projects', 'pr.title': "Things I've shipped",
        'pr.desc': 'A selection of what I build when nobody assigns it to me.',
        'pr.new': 'Latest',
        'pr.p1lead': "Describe a project in plain language and get a staffed, interdisciplinary team back — roles assigned, and the skill gaps you didn't know you had.",
        'pr.p1a': 'Semantic matching between free-text project briefs and a talent pool, using embeddings rather than keyword filters',
        'pr.p1b': 'CV parsing service that turns unstructured résumés into structured, comparable skill profiles',
        'pr.p1c': 'Explainable recommendations: every assignment comes with the reason it was made',
        'pr.p1d': 'FastAPI backend split into projects / talent / teams routers, React + TypeScript + Vite front end',
        'pr.p1e': 'Built for universities, hackathons and innovation programmes that staff teams by hand today',
        'pr.p2lead': 'Write your logic once, get both a REST API and a set of MCP tools. No duplicated handlers, in either direction.',
        'pr.p2a': 'MCP → FastAPI: inspects registered tools, builds Pydantic models dynamically and registers the matching POST endpoints',
        'pr.p2b': 'FastAPI → MCP: walks the defined routes, extracts their Pydantic models and exposes them as MCP tools',
        'pr.p2c': 'Swagger docs come along for free; near-zero configuration either way',
        'pr.p3lead': 'An autonomous data analyst: ask in plain English, get SQL, a chart and an explanation.',
        'pr.p3a': 'Five-step agent: generate SQL, execute with retries, summarize, suggest a chart, serialize',
        'pr.p3b': 'Read-only engine that blocks INSERT, UPDATE, DELETE and DROP outright',
        'pr.p3c': 'Runs on OpenAI or fully local via Ollama; three services orchestrated with Docker Compose',
        'pr.p4title': 'Dog breed recognition pipeline',
        'pr.p4lead': 'The full computer-vision pipeline I authored for the course I teach at UNR.',
        'pr.p4a': 'Three stages: similarity search over embeddings, supervised classification, then object detection',
        'pr.p4b': 'Async FastAPI returning 202 + job ids, pgvector storage with cosine/L2, swappable embedding backbones',
        'pr.p4c': 'Scored with NDCG@10, precision, recall and F1 — students train their own models against it',
        'pr.more': 'More on GitHub',

        'ct.label': 'contact', 'ct.title': "Let's build something that ships",
        'ct.desc': "I'm open to international opportunities in Generative AI engineering, LLM systems architecture and AI backend engineering. The fastest way to reach me is email or LinkedIn.",
        'ct.email': 'Email me',
        'ft.made': 'Built by', 'ft.loc': 'Montevideo, Uruguay',
        'a11y.skip': 'Skip to content', 'a11y.nav': 'Main navigation',
        'a11y.theme': 'Toggle theme', 'a11y.menu': 'Open menu', 'a11y.menuClose': 'Close menu',
        'a11y.top': 'Back to top', 'a11y.log': 'Conversation with the assistant'
    },

    es: {
        "hero.name": "Constantino<br>Ferrucci",
        "hero.projects": "Ver proyectos",
        "hero.base": "Montevideo <span>Uruguay</span>",
        "hero.status": "<span class=\"status-inline\"><span class=\"status-dot\" aria-hidden=\"true\"></span>Disponible para puestos internacionales</span>",
        "hero.portrait": "Retrato de Constantino Ferrucci",
        "hero.summary": "Perfil actual",
        "about.focus": "Mi trabajo",
        "fig.label": "FIG 01 &middot; ARQUITECTURA DE REFERENCIA DE AGENTES",
        "fig.heading": "Cómo organizo los sistemas de agentes: planificación, delegación, herramientas y revisión",
        "fig.traces_offline_evals_inform_routing_opentelemetry": "Las trazas y las evaluaciones orientan las rutas (OpenTelemetry)",
        "fig.01": "01",
        "fig.request": "Solicitud",
        "fig.user_goal_enters": "El objetivo entra",
        "fig.the_graph": "en el grafo",
        "fig.02": "02",
        "fig.supervisor_langgraph": "Supervisor (LangGraph)",
        "fig.stateful_graph_plans_steps_and_routes_work": "Planifica y asigna tareas según el estado",
        "fig.03a": "03a",
        "fig.retrieval_agent": "Agente de búsqueda",
        "fig.hybrid_search_over": "Búsqueda híbrida en",
        "fig.documents": "documentos",
        "fig.03b": "03b",
        "fig.data_agent": "Agente de datos",
        "fig.sql_behind_a": "SQL en modo de",
        "fig.read_only_guard": "solo lectura",
        "fig.03c": "03c",
        "fig.tool_agent": "Agente de herramientas",
        "fig.calls_apis_and": "Llama a API y",
        "fig.services": "servicios",
        "fig.a2a_agent_cards_task_delegation": "A2A: fichas de agente y delegación de tareas",
        "fig.mcp_tool_layer": "Capa de herramientas MCP",
        "fig.fastmcp_servers": "Servidores FastMCP",
        "fig.rest_harr_mcp": "REST &harr; MCP",
        "fig.typed_schemas_pydantic": "Esquemas tipados (Pydantic)",
        "fig.autogen_review_loop": "Revisión con AutoGen",
        "fig.planner_and_critic_agents": "El planificador y el crítico",
        "fig.check_the_draft": "revisan el borrador",
        "fig.04": "04",
        "fig.answer": "Respuesta",
        "fig.cited_validated_returned": "Validada y con citas",
        "fig.traces_offline_evals_inform": "Las trazas y las evaluaciones",
        "fig.routing_opentelemetry": "orientan las rutas (OpenTelemetry)",
        "fig.user_goal_enters_the_graph": "El objetivo entra en el grafo",
        "fig.stateful_graph_plans_steps": "Planifica según el estado",
        "fig.and_routes_work": "y asigna las tareas",
        "fig.hybrid_search_over_documents": "Búsqueda híbrida en documentos",
        "fig.sql_behind_a_read_only_guard": "SQL en modo de solo lectura",
        "fig.calls_apis_and_services": "Llama a API y servicios",
        "fig.wide": "FIG 01: Arquitectura de referencia de agentes",
        "fig.vertical": "FIG 01: Arquitectura de referencia de agentes en vertical",
        "fig.wideDesc": "La solicitud llega al supervisor de LangGraph, que distribuye las tareas entre agentes de búsqueda, datos y herramientas mediante A2A. Los agentes intercambian llamadas con la capa MCP y envían los borradores a AutoGen para su revisión antes de responder. Las trazas de OpenTelemetry y las evaluaciones orientan las decisiones de enrutamiento.",
        "fig.verticalDesc": "Diagrama vertical. La solicitud llega al supervisor de LangGraph, que distribuye las tareas entre agentes de búsqueda, datos y herramientas mediante A2A. Los agentes intercambian llamadas con la capa MCP y envían los borradores a AutoGen para su revisión antes de responder. Las trazas de OpenTelemetry y las evaluaciones orientan las decisiones de enrutamiento.",
        "fig.step1": "01 Solicitud: el objetivo del usuario entra en el grafo.",
        "fig.step2": "02 Supervisor (LangGraph): planifica los pasos según el estado y asigna trabajo a tres agentes especializados.",
        "fig.step3": "03a Búsqueda: búsqueda híbrida en documentos. 03b Datos: SQL en modo de solo lectura. 03c Herramientas: llamadas a API y servicios. Los agentes coordinan las tareas mediante fichas y delegación A2A. Intercambian llamadas con la capa MCP, que incluye servidores FastMCP, acceso entre REST y MCP y esquemas tipados con Pydantic.",
        "fig.step4": "Revisión con AutoGen: el planificador y el crítico revisan los borradores de los agentes antes de devolverlos.",
        "fig.step5": "04 Respuesta: se valida y se devuelve con citas. Las trazas de OpenTelemetry y las evaluaciones sin conexión sirven para revisar las rutas.",
        "fig.loop": "<strong>RETROALIMENTACIÓN:</strong> Las trazas y las evaluaciones sin conexión sirven para revisar las rutas.",
        "about.evidence.exp-wiener": "Referencias: <a href=\"#exp-wiener\">Wiener lab.</a>, <a href=\"#exp-apple\">Apple</a>",
        "about.evidence.exp-apple": "Referencias: <a href=\"#exp-apple\">Apple</a>, <a href=\"#project-datagentra\">Datagentra</a>, <a href=\"#project-fastmcp\">fastapi-fastmcp-autogen</a>",
        "about.evidence.project-dog-pipeline": "Referencias: <a href=\"#project-dog-pipeline\">Proyecto de la UNR</a>, <a href=\"#exp-unr-cv\">Visión por computadora en la UNR</a>, <a href=\"#exp-unr-nlp\">Procesamiento del lenguaje natural en la UNR</a>",

        'nav.home': 'Inicio', 'nav.chat': 'Asistente', 'nav.about': 'Sobre mí', 'nav.skills': 'Tecnologías',
        'nav.exp': 'Experiencia', 'nav.projects': 'Proyectos', 'nav.contact': 'Contacto',
        'nav.lang': 'Switch to English', 'nav.langShort': 'EN',
        'nav.themeLight': 'Cambiar a tema claro', 'nav.themeDark': 'Cambiar a tema oscuro',

        'hero.tag': 'Abierto a oportunidades internacionales',
        'hero.sub': "Desarrollo sistemas RAG y sistemas de agentes, y enseño visión por computadora.",
        'hero.ctaChat': "Preguntar a mi asistente",
        'hero.ctaCv': "Descargar CV",
        'hero.title': "Ingeniero sénior de IA generativa.",
        'hero.nowLabel': "Actualmente", 'hero.now': "Apple <span>contratista a través de TCS</span>",
        'hero.teachLabel': "Docencia", 'hero.teach': "UNR <span>Visión por computadora</span>",
        'hero.baseLabel': "Residencia", 'hero.statusLabel': "Disponibilidad",

        'sk.retrieval': 'Recuperación', 'sk.orch': 'Orquestación',
        'sk.rel': 'Confiabilidad y evaluación', 'sk.serving': 'Modelos y serving',
        'sk.frameworks': 'Frameworks', 'sk.cv': 'Visión computacional', 'sk.nlp': 'NLP', 'sk.eval': 'Evaluación',
        'sk.apis': 'APIs y servicios', 'sk.data': 'Datos y almacenamiento', 'sk.front': 'Front end',
        'sk.deploy': 'Contenedores y deploy', 'sk.ci': 'Plataforma y CI',
        'sk.obs': 'Observabilidad', 'sk.dev': 'Herramientas del día a día',
        'flow.label': 'el pipeline que construyo',
        'flow.caption': 'Cómo una pregunta se convierte en una respuesta que podés rastrear hasta su fuente',
        'flow.n1': 'Consulta', 'flow.d1': 'Reescrita y expandida antes de tocar el índice',
        'flow.n2': 'Recuperación', 'flow.d2': 'Híbrida: semántica + keyword, filtrada por metadata',
        'flow.n3': 'Re-ranking', 'flow.d3': 'Un cross-encoder recorta decenas de candidatos a un puñado',
        'flow.n4': 'Grounding', 'flow.d4': 'Inyección de contexto controlada, alineada a reglas de negocio',
        'flow.n5': 'Respuesta', 'flow.d5': 'Citada, trazable y puntuada por la suite de evaluación',
        'flow.loop': 'La evaluación, la observabilidad y los feedback loops vuelven a alimentar la recuperación &mdash; esa es la parte que evita que la calidad se degrade.',
        'cmd.title': 'Paleta de comandos', 'cmd.open': 'Abrir la paleta de comandos',
        'cmd.placeholder': 'Ir a una sección, preguntar algo, cambiar el tema…',
        'cmd.nav': 'moverse', 'cmd.run': 'ejecutar', 'cmd.close': 'cerrar',
        'cmd.empty': 'No hay nada que coincida.',
        'cmd.gNav': 'Ir a', 'cmd.gAsk': 'Preguntarle al asistente',
        'cmd.gSet': 'Ajustes', 'cmd.gLinks': 'En otro lado',
        'cmd.theme': 'Cambiar tema claro / oscuro', 'cmd.lang': 'Cambiar a inglés',
        'cmd.cv': 'Descargar CV', 'cmd.github': 'Abrir GitHub', 'cmd.linkedin': 'Abrir LinkedIn',
        'cmd.email': 'Enviar un mail',
        'exp.label': 'a qué me dedico',
        'exp.title': 'Más allá de la demo',
        'exp.desc': 'La mayoría de los proyectos de GenAI se mueren entre la notebook y producción. Mi trabajo es lo que viene después: que la recuperación sea precisa, que las respuestas sean trazables y que todo aguante carga real.',
        'exp.p1t': "Recuperación de información y evaluación",
        'exp.p1d': "Los sistemas de búsqueda combinan búsqueda híbrida, filtros de metadatos y reordenación de resultados en manuales técnicos, archivos PDF y bases de datos. Así es posible rastrear las fuentes de cada respuesta. Los controles contrastan las respuestas con registros verificados y aplican las reglas de negocio.",
        'exp.p2t': "Agentes, MCP y servicios de backend",
        'exp.p2d': "Los agentes desarrollados con LangChain, LangGraph y MCP usan herramientas para conectar modelos de lenguaje con API y bases de datos. Estos servicios se implementan con FastAPI y se despliegan en contenedores Docker.",
        'exp.p3t': "Visión por computadora y docencia",
        'exp.p3d': "El proyecto del curso abarca búsqueda por similitud, clasificación y detección de objetos. En la UNR evalúo la búsqueda por similitud con NDCG@10. Actualmente enseño visión por computadora; antes enseñé procesamiento del lenguaje natural.",

        'chat.label': 'preguntame lo que quieras',
        'chat.title': 'Hablá con mi asistente',
        'chat.desc': 'Conoce mi recorrido, mi stack y mis proyectos. Preguntale lo mismo que me preguntarías en una primera llamada, o elegí una de las preguntas de abajo.',
        'chat.loading': 'Despertando al asistente…',
        'chat.model': 'Modelo', 'chat.clear': 'Limpiar',
        'chat.provider': 'Proveedor del modelo', 'chat.modelLabel': 'Modelo de lenguaje',
        'chat.assistant': 'Asistente', 'chat.you': 'Vos', 'chat.thinking': 'Pensando…',
        'chat.greeting': '¡Hola! Soy el asistente de Constantino. Preguntame por su experiencia con sistemas RAG en producción, el stack con el que trabaja, qué enseña en la UNR o cómo contactarlo.',
        'chat.s1': '¿En qué trabaja en Apple?',
        'chat.s2': '¿Cómo arma RAG para producción?',
        'chat.s3': '¿Qué enseña en la UNR?',
        'chat.s4': '¿Está abierto a relocarse?',
        'chat.inputLabel': 'Tu pregunta',
        'chat.placeholder': 'Escribí tu pregunta…',
        'chat.send': 'Enviar mensaje',
        'chat.ready': '%n modelos disponibles',
        'chat.pick': 'Elegí un proveedor y un modelo para empezar.',
        'chat.failed': 'No se pudieron cargar los modelos. Recargá la página.',
        'chat.err': 'No pude responder: %m. Probá de nuevo o elegí otro modelo.',
        'chat.empty': '(respuesta vacía)',

        'about.label': "Perfil",
        'about.title': "Sobre mí",
        'about.p1': "Trabajé tres años en <strong>Wiener lab.</strong>, donde desarrollé asistentes internos de soporte técnico y atención al cliente, sistemas de visión por computadora para analizar documentos y procesos de datos para laboratorios clínicos. Hoy trabajo con <strong>Apple</strong> como contratista a través de Tata Consultancy Services. Conecto modelos de lenguaje con datos empresariales, API y procesos internos mediante LangChain, LangGraph y MCP.",
        'about.p2': "En la <strong>Universidad Nacional de Rosario</strong> enseño visión por computadora como auxiliar de primera. Antes enseñé procesamiento del lenguaje natural en la misma carrera.",
        'about.p3': "Tras completar la secundaria técnica en electromecánica, obtuve el título de la Tecnicatura Universitaria en Inteligencia Artificial de la UNR. Actualmente curso la Licenciatura en Inteligencia Artificial.",
        'about.p4': 'Antes del software completé una tecnicatura secundaria en electromecánica; desde 2022 trabajo full-time en ingeniería de IA.',
        'about.s1': 'Años en ingeniería de IA', 'about.s2': 'Cátedras dictadas en UNR',
        'about.s3': 'Países donde trabajé', 'about.s4': 'Nivel profesional',

        'skills.label': 'tech stack', 'skills.title': 'El stack, con pruebas',
        'skills.desc': 'Cuatro áreas, desglosadas como las pienso en la práctica &mdash; no un muro plano de logos. Cada tarjeta cierra con dónde podés verlo funcionando.',
        'skills.proof1': 'En producción en SynergyX-AI, Datagentra y fastapi-fastmcp-autogen.',
        'skills.proof2': 'Todos los proyectos de esta página corren sobre este stack.',
        'skills.proof3': 'Esto es lo que dicto en la UNR — el pipeline de perros es mío.',
        'skills.proof4': 'El asistente de este sitio corre en un Cloudflare Worker.',
        'skills.g1': 'GenAI y sistemas LLM', 'skills.g2': 'ML, CV y NLP',
        'skills.g3': 'Backend y datos', 'skills.g4': 'Infra y herramientas',

        'tl.label': 'trayectoria', 'tl.title': 'Dónde trabajé',
        'tl.desc': 'Dos carriles en paralelo: construir sistemas de IA en la industria y enseñarlos en la Universidad Nacional de Rosario.',
        'tl.d1': 'May 2026 — Presente', 'tl.t1': 'Ingeniero Senior de IA Generativa',
        'tl.c1': 'Apple (contratista) vía Tata Consultancy Services · Montevideo, Uruguay',
        'tl.b1': 'Automatizaciones de GenAI de nivel productivo para casos de uso de negocio y de IT, trabajando junto a arquitectos de automatización, product owners y stakeholders. Workflows inteligentes end-to-end que combinan LLMs con APIs, scripts, RPA y flujos orientados a eventos; workflows con agentes (planificación de tareas, uso de herramientas, toma de decisiones) sobre LangChain, LangGraph y MCP; pipelines RAG sobre bases vectoriales para grounding de conocimiento empresarial; prompt engineering, structured outputs y guardrails, además de controles de seguridad, compliance y responsible-AI durante el rollout y el monitoreo.',
        'tl.d2': 'Oct 2024 — Presente', 'tl.t2': 'Auxiliar de Primera — Visión Computacional',
        'tl.c2': 'Universidad Nacional de Rosario · Rosario, Argentina',
        'tl.b2': 'Dicto Visión Computacional en la Tecnicatura Universitaria en Inteligencia Artificial: fundamentos y trabajos prácticos en Python, PyTorch, OpenCV y Hugging Face Transformers. Escribí el pipeline práctico de tres etapas sobre el que trabajan los estudiantes y colaboro con la cátedra en el programa y las evaluaciones.',
        'tl.d3': 'Jun 2023 — Abr 2026', 'tl.t3': 'Desarrollador de IA',
        'tl.c3': 'Wiener lab. · Rosario, Argentina',
        'tl.b3': 'Soluciones con LLMs para soporte técnico, atención al cliente y automatización del conocimiento de producto, apoyadas en documentación interna, manuales técnicos, PDFs, bases de datos relacionales y motores de búsqueda. Arquitecturas RAG que combinan búsqueda vectorial, filtrado por metadata y reglas de negocio para mejorar la precisión de las respuestas; pipelines de ingesta y normalización de datos médicos y técnicos; integración con APIs internas, sistemas empresariales y capas de autenticación.',
        'tl.d4': '2022 — 2024', 'tl.t4': 'Tecnicatura Universitaria en Inteligencia Artificial',
        'tl.c4': 'Universidad Nacional de Rosario',
        'tl.b4': 'Título universitario en Inteligencia Artificial: deep learning, visión computacional, NLP y aplicaciones industriales.',

        'tl.pro': 'Profesional', 'tl.aca': 'Académico y docencia',
        'tl.d5': 'Oct 2024 — May 2026', 'tl.t5': 'Auxiliar de Primera — NLP',
        'tl.c5': 'Universidad Nacional de Rosario · Rosario, Argentina',
        'tl.b5': 'Diecinueve meses dictando Procesamiento del Lenguaje Natural en la misma carrera: fundamentos, embeddings, transformers y modelado del lenguaje aplicado, además del material de cátedra y las evaluaciones prácticas.',
        'tl.d7': '2024 — Presente', 'tl.t7': 'Licenciatura en Inteligencia Artificial',
        'tl.c7': 'Universidad Nacional de Rosario',
        'tl.b7': 'Licenciatura en Inteligencia Artificial, en curso — la continuación de la tecnicatura terminada en 2024.',
        'tl.d6': '2014 — 2020', 'tl.t6': 'Tecnicatura secundaria en electromecánica',
        'tl.c6': 'EETP N° 466 Manuel N. Savio · Rosario, Argentina',
        'tl.b6': 'Tecnicatura secundaria (EETP N° 466).',
        'pr.label': 'proyectos', 'pr.title': 'Cosas que construí',
        'pr.desc': 'Una selección de lo que hago cuando nadie me lo pide.',
        'pr.new': 'Lo último',
        'pr.p1lead': 'Describís un proyecto en lenguaje natural y te devuelve un equipo interdisciplinario armado: roles asignados y los huecos de skills que no sabías que tenías.',
        'pr.p1a': 'Matching semántico entre briefs de proyecto en texto libre y un pool de talento, con embeddings en lugar de filtros por keyword',
        'pr.p1b': 'Servicio de parsing de CVs que convierte currículums no estructurados en perfiles de skills comparables',
        'pr.p1c': 'Recomendaciones explicables: cada asignación viene con el motivo por el que se hizo',
        'pr.p1d': 'Backend FastAPI separado en routers de projects / talent / teams, frontend React + TypeScript + Vite',
        'pr.p1e': 'Pensado para universidades, hackathons y programas de innovación que hoy arman los equipos a mano',
        'pr.p2lead': 'Escribís la lógica una sola vez y obtenés a la vez una API REST y un set de herramientas MCP. Sin handlers duplicados, en cualquiera de los dos sentidos.',
        'pr.p2a': 'MCP → FastAPI: inspecciona las tools registradas, arma modelos Pydantic dinámicamente y registra los endpoints POST correspondientes',
        'pr.p2b': 'FastAPI → MCP: recorre las rutas definidas, extrae sus modelos Pydantic y las expone como herramientas MCP',
        'pr.p2c': 'La documentación Swagger viene de regalo; configuración casi nula en ambos sentidos',
        'pr.p3lead': 'Un analista de datos autónomo: preguntás en castellano y te devuelve SQL, un gráfico y una explicación.',
        'pr.p3a': 'Agente de cinco pasos: genera SQL, ejecuta con reintentos, resume, sugiere un gráfico y serializa',
        'pr.p3b': 'Motor de solo lectura que bloquea de plano INSERT, UPDATE, DELETE y DROP',
        'pr.p3c': 'Corre con OpenAI o 100% local con Ollama; tres servicios orquestados con Docker Compose',
        'pr.p4title': 'Pipeline de reconocimiento de razas de perros',
        'pr.p4lead': 'El pipeline completo de visión por computadora que escribí para la cátedra que dicto en la UNR.',
        'pr.p4a': 'Tres etapas: búsqueda por similitud sobre embeddings, clasificación supervisada y detección de objetos',
        'pr.p4b': 'FastAPI asíncrono que devuelve 202 + job ids, almacenamiento en pgvector con coseno/L2 y backbones de embedding intercambiables',
        'pr.p4c': 'Evaluado con NDCG@10, precisión, recall y F1 — los estudiantes entrenan sus propios modelos contra él',
        'pr.more': 'Más en GitHub',

        'ct.label': 'contacto', 'ct.title': 'Construyamos algo que llegue a producción',
        'ct.desc': 'Estoy abierto a oportunidades internacionales en ingeniería de IA generativa, arquitectura de sistemas LLM e ingeniería de backend para IA. La vía más rápida es el mail o LinkedIn.',
        'ct.email': 'Escribime',
        'ft.made': 'Hecho por', 'ft.loc': 'Montevideo, Uruguay',
        'a11y.skip': 'Saltar al contenido', 'a11y.nav': 'Navegación principal',
        'a11y.theme': 'Cambiar tema', 'a11y.menu': 'Abrir menú', 'a11y.menuClose': 'Cerrar menú',
        'a11y.top': 'Volver arriba', 'a11y.log': 'Conversación con el asistente'
    }
};

let lang = 'en';

function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function applyLang(next, translateContent = true) {
    lang = (next === 'es') ? 'es' : 'en';
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage blocked */ }

    if (translateContent) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.innerHTML = t(el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            el.innerHTML = t(el.getAttribute('data-i18n-html'));
        });
        // "placeholder:chat.placeholder;aria-label:chat.send"
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
                const [attr, key] = pair.split(':');
                if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
            });
        });
    }

    const langBtn = document.getElementById('langToggle');
    langBtn.setAttribute('aria-label', t('nav.lang'));
    langBtn.querySelector('.lang-code').textContent = t('nav.langShort');

    document.dispatchEvent(new CustomEvent('langchange'));
}

let storedLang = null;
try { storedLang = localStorage.getItem('lang'); } catch (e) { /* storage blocked */ }
if (!storedLang) {
    // First visit: honour the browser, but default to English for recruiters abroad
    storedLang = (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
}

document.getElementById('langToggle').addEventListener('click', () => {
    const next = lang === 'en' ? 'es' : 'en';
    withViewTransition(() => applyLang(next));
});

applyLang(storedLang, storedLang === 'es' || document.documentElement.lang !== 'en');

// ==================== THEME ====================
// Three states: explicit "light", explicit "dark", or unset = follow the OS.
const themeToggle = document.getElementById('themeToggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme() {
    return document.documentElement.getAttribute('data-theme')
        || (systemDark.matches ? 'dark' : 'light');
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* storage blocked */ }
    themeToggle.setAttribute('aria-label', t(theme === 'dark' ? 'nav.themeLight' : 'nav.themeDark'));
    document.dispatchEvent(new CustomEvent('themechange'));
}

themeToggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    withViewTransition(() => applyTheme(next));
});

// The label describes the *next* state, so it has to follow a language change.
document.addEventListener('langchange', () => {
    themeToggle.setAttribute('aria-label', t(currentTheme() === 'dark' ? 'nav.themeLight' : 'nav.themeDark'));
});

// Follow the OS while the user has not made an explicit choice
systemDark.addEventListener('change', () => {
    if (!document.documentElement.hasAttribute('data-theme')) {
        document.dispatchEvent(new CustomEvent('themechange'));
    }
});

applyTheme(currentTheme());

// ==================== MOBILE NAV ====================
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
const navBackdrop = document.getElementById('navBackdrop');

function setMenu(open) {
    navLinksEl.classList.toggle('mobile-open', open);
    navBackdrop.classList.toggle('visible', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) navLinksEl.querySelector('.nav-link').focus();
}

hamburger.addEventListener('click', () => setMenu(hamburger.getAttribute('aria-expanded') !== 'true'));
navBackdrop.addEventListener('click', () => setMenu(false));
navLinksEl.addEventListener('click', e => { if (e.target.closest('.nav-link')) setMenu(false); });
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        hamburger.focus();
    }
});
// Leaving the mobile breakpoint must not strand the page in the open state
window.matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

// ==================== NAV STATE ON SCROLL ====================
// rAF-throttled: the old handler ran a querySelector + offsetTop read per link
// on every scroll event, which forced a layout on each one.
const nav = document.getElementById('nav');
const toTop = document.getElementById('toTop');
let scrollTicking = false;

function onScrollFrame() {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 50);
    toTop.classList.toggle('visible', y > 600);
    scrollTicking = false;
}

window.addEventListener('scroll', () => {
    if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(onScrollFrame); }
}, { passive: true });

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
});

// Active link tracking via IntersectionObserver instead of scroll math
const navLinkEls = Array.from(document.querySelectorAll('.nav-link'));
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinkEls.forEach(l => {
            const on = l.getAttribute('href') === '#' + entry.target.id;
            l.classList.toggle('active', on);
            if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });

navLinkEls.forEach(l => {
    const target = document.querySelector(l.getAttribute('href'));
    if (target) sectionObserver.observe(target);
});

// ==================== REVEAL ON SCROLL ====================
const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);          // reveal is one-shot
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ==================== CHAT BOT ====================
const WORKER_URL = 'https://prueba.constantino-ferrucci.workers.dev';

// Exact id, not a substring: 'gpt-5.6-terra' is also a prefix of
// 'gpt-5.6-terra-pro', so includes() could silently pick the wrong one.
const DEFAULT_MODEL_ID = 'openai/gpt-5.6-terra';

let conversationHistory = [];
let allModels = [];
let modelsByProvider = {};

// ==================== LAZY CHAT MARKDOWN DEPS ====================
// marked + DOMPurify ship zero bytes on first paint. They are injected on the
// first sign the visitor wants the chat (input focus/click, a suggestion tap,
// or the chat section scrolling into view) and the promise is cached, so the
// pair loads at most once. Until they arrive — or if the CDN fails —
// renderMarkdown() below falls back to escaped plain text, never innerHTML
// of untrusted content.
const CHAT_DEPS = [
    'https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js',
    'https://cdn.jsdelivr.net/npm/dompurify@3.1.6/dist/purify.min.js'
];
let chatDepsPromise = null;

function ensureChatDeps() {
    if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
        return Promise.resolve();
    }
    if (!chatDepsPromise) {
        chatDepsPromise = Promise.all(CHAT_DEPS.map(src => new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = src;
            s.async = true;
            s.onload = resolve;
            s.onerror = () => reject(new Error('Failed to load ' + src));
            document.head.appendChild(s);
        })));
    }
    return chatDepsPromise;
}

let chatDepsKicked = false;
function kickChatDeps() {
    if (chatDepsKicked) return chatDepsPromise;
    chatDepsKicked = true;
    ensureChatDeps().catch(() => { /* renderMarkdown() falls back to plain text */ });
    return chatDepsPromise;
}
const chatMessagesEl = document.getElementById('chatMessages');
const userInputEl = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const suggestionsEl = document.getElementById('chatSuggestions');
const statusEl = document.getElementById('modelsStatus');

function greetingHTML() {
    return `
        <div class="message assistant">
            <div class="message-header">
                <div class="msg-avatar" aria-hidden="true">CF</div>
                <span class="msg-label" data-i18n="chat.assistant">${t('chat.assistant')}</span>
            </div>
            <div class="msg-body" data-i18n="chat.greeting">${t('chat.greeting')}</div>
        </div>`;
}

// The advanced panel is collapsed by default: picking a model is a power-user
// detour, not the thing a recruiter came here to do.
const advancedBtn = document.getElementById('advancedBtn');
const advancedPanel = document.getElementById('advancedPanel');
advancedBtn.addEventListener('click', () => {
    const open = advancedBtn.getAttribute('aria-expanded') !== 'true';
    advancedBtn.setAttribute('aria-expanded', String(open));
    advancedPanel.hidden = !open;
    if (open) ensureModels();
});

// One tap to ask the questions people actually want answered
suggestionsEl.addEventListener('click', e => {
    kickChatDeps();
    const chip = e.target.closest('.suggestion');
    if (!chip) return;
    userInputEl.value = chip.textContent.trim();
    sendMessage();
});

// First chat intent pulls the markdown deps in the background, so they are
// warm by the time the first reply needs rendering.
userInputEl.addEventListener('focus', kickChatDeps, { once: true });
userInputEl.addEventListener('click', kickChatDeps, { once: true });
new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) { kickChatDeps(); obs.disconnect(); }
}).observe(document.getElementById('chat'));

let modelsPromise;
const overlay = document.getElementById('loadingOverlay');
overlay.classList.add('hidden');

function ensureModels() {
    if (!modelsPromise) modelsPromise = loadModels();
    return modelsPromise;
}

async function loadModels() {
    const status = statusEl;
    overlay.classList.remove('hidden');

    try {
        const response = await fetch(`${WORKER_URL}/models`);
        if (!response.ok) throw new Error(`El servidor respondió ${response.status}`);
        const data = await response.json();
        if (data.error) throw new Error(data.error.message || 'Error al cargar modelos');

        allModels = data.data.filter(model => {
            const input = model.architecture?.input_modalities || [];
            const output = model.architecture?.output_modalities || [];
            return input.includes('text') && output.includes('text');
        });

        allModels.sort((a, b) => a.name.localeCompare(b.name));

        modelsByProvider = {};
        allModels.forEach(model => {
            const parts = model.id.split('/');
            const provider = parts.length > 1 ? parts[0] : 'other';
            (modelsByProvider[provider] = modelsByProvider[provider] || []).push(model);
        });

        populateProviders();

        const defaultModel = allModels.find(m => m.id === DEFAULT_MODEL_ID)
            || allModels.find(m => m.id.includes('gpt-4o-mini'))
            || allModels[0];
        if (defaultModel) {
            const parts = defaultModel.id.split('/');
            document.getElementById('providerSelect').value = parts.length > 1 ? parts[0] : 'other';
            onProviderChange();
            document.getElementById('modelSelectEl').value = defaultModel.id;
            document.getElementById('selectedModel').value = defaultModel.id;
        }

        status.textContent = t('chat.ready').replace('%n', allModels.length);
        status.className = 'advanced-hint ok';
        overlay.classList.add('hidden');
    } catch (error) {
        status.textContent = `Error: ${error.message}`;
        status.className = 'advanced-hint err';
        overlay.querySelector('.loader-text').textContent = t('chat.failed');
    }
}

function populateProviders() {
    const sel = document.getElementById('providerSelect');
    sel.innerHTML = `<option value="">${t('chat.provider')}…</option>`;
    Object.keys(modelsByProvider).sort().forEach(provider => {
        const opt = document.createElement('option');
        opt.value = provider;
        opt.textContent = provider;
        sel.appendChild(opt);
    });
}

function onProviderChange() {
    const provider = document.getElementById('providerSelect').value;
    const modelSel = document.getElementById('modelSelectEl');
    modelSel.innerHTML = `<option value="">${t('chat.modelLabel')}…</option>`;
    document.getElementById('selectedModel').value = '';

    if (!provider || !modelsByProvider[provider]) return;

    modelsByProvider[provider].forEach(model => {
        const opt = document.createElement('option');
        opt.value = model.id;
        const parts = model.id.split('/');
        opt.textContent = model.name || (parts.length > 1 ? parts.slice(1).join('/') : model.id);
        modelSel.appendChild(opt);
    });
    // Auto-pick the first model so the send button is never silently inert
    if (modelSel.options.length > 1) {
        modelSel.selectedIndex = 1;
        document.getElementById('selectedModel').value = modelSel.value;
    }
}

function onModelChange() {
    document.getElementById('selectedModel').value = document.getElementById('modelSelectEl').value;
}

function clearConversation() {
    conversationHistory = [];
    chatMessagesEl.innerHTML = greetingHTML();
    suggestionsEl.classList.remove('hidden');
    userInputEl.focus();
}

document.getElementById('providerSelect').addEventListener('change', onProviderChange);
document.getElementById('modelSelectEl').addEventListener('change', onModelChange);
document.getElementById('clearBtn').addEventListener('click', clearConversation);
sendBtn.addEventListener('click', sendMessage);

// Enter sends, Shift+Enter breaks the line; the box grows with the content
userInputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});
userInputEl.addEventListener('input', () => {
    userInputEl.style.height = 'auto';
    userInputEl.style.height = Math.min(userInputEl.scrollHeight, 140) + 'px';
});

function scrollChatToEnd() {
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
}

async function sendMessage() {
    if (!userInputEl.value.trim()) return;
    if (!document.getElementById('selectedModel').value) await ensureModels();
    const modelId = document.getElementById('selectedModel').value;
    const userInput = userInputEl.value.trim();

    if (!userInput) return;
    if (!modelId) {
        advancedBtn.setAttribute('aria-expanded', 'true');
        advancedPanel.hidden = false;
        statusEl.textContent = t('chat.pick');
        statusEl.className = 'advanced-hint err';
        return;
    }

    suggestionsEl.classList.add('hidden');

    addMessage('user', userInput);
    userInputEl.value = '';
    userInputEl.style.height = 'auto';

    const typing = document.createElement('div');
    typing.className = 'message assistant';
    typing.innerHTML = `
        <div class="message-header">
            <div class="msg-avatar" aria-hidden="true">CF</div>
            <span class="msg-label">${t('chat.thinking')}</span>
        </div>
        <div class="typing-indicator" aria-hidden="true">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatMessagesEl.appendChild(typing);
    scrollChatToEnd();
    sendBtn.disabled = true;
    sendBtn.setAttribute('aria-busy', 'true');

    conversationHistory.push({ role: 'user', content: userInput });

    try {
        const response = await fetch(`${WORKER_URL}/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ model: modelId, messages: conversationHistory, temperature: 0.7, stream: true })
        });

        // The Worker deploys separately from this page. An older Worker ignores
        // `stream` and answers with buffered JSON, so branch on what came back
        // rather than on what we asked for.
        const streaming = response.ok && response.body
            && (response.headers.get('content-type') || '').includes('text/event-stream');

        let reply;
        if (streaming) {
            reply = await streamReply(response, typing);
        } else {
            const data = await response.json();
            typing.remove();
            if (data.error) throw new Error(data.error.message || 'Error en la API');
            reply = (data.choices?.[0]?.message?.content || '').trim();
            addMessage('assistant', reply || t('chat.empty'));
        }
        conversationHistory.push({ role: 'assistant', content: reply });
    } catch (error) {
        typing.remove();
        conversationHistory.pop();          // don't poison the history with a failed turn
        addMessage('assistant', t('chat.err').replace('%m', error.message));
    }
    sendBtn.disabled = false;
    sendBtn.removeAttribute('aria-busy');
    userInputEl.focus();
}

// Reads the Worker's SSE relay and paints tokens as they arrive. Returns the
// full reply so the caller can append it to the conversation history.
async function streamReply(response, typing) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let text = '';
    let live = null;
    let queued = false;
    let pending = '';
    let textNode;

    // Append only new text while streaming; format once at finalization.
    const paint = () => {
        if (queued || !live) return;
        queued = true;
        requestAnimationFrame(() => {
            queued = false;
            if (!live) return;
            textNode.appendData(pending);
            pending = '';
            scrollChatToEnd();
        });
    };

    try {
        for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });

            // SSE frames are blank-line separated; keep the partial tail back.
            const frames = buffer.split('\n\n');
            buffer = frames.pop();

            for (const frame of frames) {
                for (const line of frame.split('\n')) {
                    if (!line.startsWith('data:')) continue;
                    const payload = line.slice(5).trim();
                    if (!payload || payload === '[DONE]') continue;

                    let json;
                    try { json = JSON.parse(payload); } catch (err) { continue; }
                    if (json.error) throw new Error(json.error.message || 'Error en la API');

                    const delta = json.choices?.[0]?.delta?.content;
                    if (!delta) continue;

                    // Swap the thinking dots for a real bubble on the first token.
                    if (!live) {
                        typing.remove();
                        live = addMessage('assistant', '').querySelector('.msg-body');
                        live.classList.add('streaming');
                        textNode = live.appendChild(document.createTextNode(''));
                    }
                    text += delta;
                    pending += delta;
                    paint();
                }
            }
        }
    } finally {
        reader.cancel().catch(() => { /* already closed */ });
        typing.remove();
        text = text.trim();
        if (live) {
            live.classList.remove('streaming');
            live.innerHTML = renderMarkdown(text || t('chat.empty'));
            live = null; // Ignore any queued frame after finalization.
            scrollChatToEnd();
        }
    }
    if (!textNode) addMessage('assistant', t('chat.empty'));
    return text;
}

function addMessage(role, content) {
    const div = document.createElement('div');
    div.className = `message ${role}`;
    const avatar = role === 'user' ? '/' : 'CF';
    const label = role === 'user' ? t('chat.you') : t('chat.assistant');
    div.innerHTML = `
        <div class="message-header">
            <div class="msg-avatar" aria-hidden="true">${avatar}</div>
            <span class="msg-label">${label}</span>
        </div>
        <div class="msg-body">${role === 'user' ? escapeHtml(content) : (content ? renderMarkdown(content) : '')}</div>
    `;
    chatMessagesEl.appendChild(div);
    scrollChatToEnd();
    return div;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
}

// Model output is untrusted input: parse it, then sanitize before it touches the DOM.
// Before the lazy deps arrive (or if the CDN fails), fall back to escaped
// plain text — safe by construction, just less pretty.
function renderMarkdown(text) {
    try {
        if (typeof marked === 'undefined' || typeof marked.parse !== 'function') {
            return escapeHtml(text);
        }
        const html = marked.parse(text);
        return (typeof DOMPurify !== 'undefined') ? DOMPurify.sanitize(html) : escapeHtml(text);
    } catch (err) {
        return escapeHtml(text);
    }
}


// ==================== COMMAND PALETTE (Ctrl/Cmd + K) ====================
// Keyboard-first navigation. Every entry is something you can also reach by
// mouse; the palette just makes it one keystroke away.
const cmdk = document.getElementById('cmdk');
const cmdkInput = document.getElementById('cmdkInput');
const cmdkList = document.getElementById('cmdkList');
const cmdkTrigger = document.getElementById('cmdkTrigger');
let cmdkIndex = 0;
let cmdkMatches = [];
let cmdkReturnFocus = null;

const CMDK_ICONS = {
    section: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>',
    cv: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
    ask: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>',
    theme: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>',
    lang: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>',
    link: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>',
    mail: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'
};

function goTo(hash) {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
}

function askAssistant(question) {
    goTo('#chat');
    userInputEl.value = question;
    sendMessage();
}

function buildCommands() {
    const nav = [
        ['nav.home', '#hero'], ['nav.chat', '#chat'], ['nav.about', '#about'],
        ['nav.skills', '#skills'], ['nav.exp', '#experience'],
        ['nav.projects', '#projects'], ['nav.contact', '#contact']
    ].map(([key, hash]) => ({
        group: t('cmd.gNav'), icon: 'section', label: t(key), run: () => goTo(hash)
    }));

    const ask = ['chat.s1', 'chat.s2', 'chat.s3', 'chat.s4'].map(key => ({
        group: t('cmd.gAsk'), icon: 'ask', label: t(key), run: () => askAssistant(t(key))
    }));

    const settings = [
        { group: t('cmd.gSet'), icon: 'theme', label: t('cmd.theme'), hint: 'theme',
          run: () => applyTheme(currentTheme() === 'dark' ? 'light' : 'dark') },
        { group: t('cmd.gSet'), icon: 'lang', label: t('cmd.lang'), hint: t('nav.langShort'),
          run: () => applyLang(lang === 'en' ? 'es' : 'en') }
    ];

    const links = [
        { group: t('cmd.gLinks'), icon: 'cv', label: t('cmd.cv'),
          run: () => { const a = document.createElement('a'); a.href = 'assets/cv/Constantino_Ferrucci_CV.pdf'; a.download = ''; a.click(); } },
        { group: t('cmd.gLinks'), icon: 'link', label: t('cmd.github'),
          run: () => window.open('https://github.com/TinoFerrucci', '_blank', 'noopener') },
        { group: t('cmd.gLinks'), icon: 'link', label: t('cmd.linkedin'),
          run: () => window.open('https://www.linkedin.com/in/constantinoferrucci', '_blank', 'noopener') },
        { group: t('cmd.gLinks'), icon: 'mail', label: t('cmd.email'),
          run: () => { window.location.href = 'mailto:constantinoferrucci@gmail.com'; } }
    ];

    return nav.concat(ask, settings, links);
}

let COMMANDS = buildCommands();
document.addEventListener('langchange', () => { COMMANDS = buildCommands(); if (!cmdk.hidden) renderCmdk(); });

function renderCmdk() {
    const q = cmdkInput.value.trim().toLowerCase();
    cmdkMatches = q
        ? COMMANDS.filter(c => (c.label + ' ' + c.group).toLowerCase().includes(q))
        : COMMANDS.slice();

    if (cmdkIndex >= cmdkMatches.length) cmdkIndex = 0;

    if (!cmdkMatches.length) {
        cmdkList.innerHTML = `<li class="cmdk-empty">${t('cmd.empty')}</li>`;
        cmdkInput.removeAttribute('aria-activedescendant');
        return;
    }

    let html = '';
    let lastGroup = null;
    cmdkMatches.forEach((c, i) => {
        if (c.group !== lastGroup) {
            html += `<li class="cmdk-group" role="presentation">${c.group}</li>`;
            lastGroup = c.group;
        }
        html += `<li class="cmdk-item" id="cmdk-opt-${i}" role="option" data-i="${i}" aria-selected="${i === cmdkIndex}">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">${CMDK_ICONS[c.icon]}</svg>
            <span>${c.label}</span>
            ${c.hint ? `<span class="cmdk-hint">${c.hint}</span>` : ''}
        </li>`;
    });
    cmdkList.innerHTML = html;
    cmdkInput.setAttribute('aria-activedescendant', 'cmdk-opt-' + cmdkIndex);
    const active = cmdkList.querySelector('[aria-selected="true"]');
    if (active) active.scrollIntoView({ block: 'nearest' });
}

function openCmdk() {
    cmdkReturnFocus = document.activeElement;
    cmdk.hidden = false;
    cmdkInput.value = '';
    cmdkIndex = 0;
    renderCmdk();
    cmdkInput.focus();
    document.body.style.overflow = 'hidden';
}

function closeCmdk() {
    if (cmdk.hidden) return;
    cmdk.hidden = true;
    document.body.style.overflow = '';
    if (cmdkReturnFocus && cmdkReturnFocus.focus) cmdkReturnFocus.focus();
}

function runCmdk(i) {
    const cmd = cmdkMatches[i];
    if (!cmd) return;
    closeCmdk();
    cmd.run();
}

cmdkTrigger.addEventListener('click', openCmdk);
document.getElementById('cmdkBackdrop').addEventListener('click', closeCmdk);
cmdkInput.addEventListener('input', () => { cmdkIndex = 0; renderCmdk(); });

cmdkList.addEventListener('click', e => {
    const item = e.target.closest('.cmdk-item');
    if (item) runCmdk(Number(item.dataset.i));
});

cmdkInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        cmdkIndex = (cmdkIndex + 1) % Math.max(cmdkMatches.length, 1);
        renderCmdk();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        cmdkIndex = (cmdkIndex - 1 + cmdkMatches.length) % Math.max(cmdkMatches.length, 1);
        renderCmdk();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        runCmdk(cmdkIndex);
    } else if (e.key === 'Tab') {
        e.preventDefault();   // the palette is the only focusable surface while open
    }
});

document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        cmdk.hidden ? openCmdk() : closeCmdk();
        return;
    }
    if (e.key === 'Escape' && !cmdk.hidden) {
        e.preventDefault();
        closeCmdk();
    }
});

// macOS shows the Command symbol; everyone else gets Ctrl
if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) {
    document.querySelector('.cmdk-mod').textContent = '⌘';
}

// ==================== RAG DIAGRAM RAIL ====================
// The travelling pulse has to cross exactly one column, so measure it.
const flowTrack = document.querySelector('.flow-track');

function measureFlow() {
    if (!flowTrack || window.innerWidth <= 900) return;
    const nodes = flowTrack.children;
    if (nodes.length < 2) return;
    const span = nodes[1].offsetLeft - nodes[0].offsetLeft - 50;
    flowTrack.style.setProperty('--flow-span', Math.max(span, 40) + 'px');
}

measureFlow();
window.addEventListener('resize', measureFlow, { passive: true });
document.addEventListener('langchange', measureFlow);
