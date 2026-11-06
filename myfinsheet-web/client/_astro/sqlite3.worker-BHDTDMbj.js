const e=3338,t=4106,n=2570,r=1802,i=1034,a=1546,o=1024,s=2048,c=4096,l=8192,u=16384,d=524288,f=9223372036854775807n,p=-9223372036854775808n,m=Object.getPrototypeOf(async function(){}).constructor;var h=class extends Error{constructor(e,t){super(e),this.code=t}};function g(e){let t={};e.retryOps=[];let n=e._getSqliteFree(),r=e._malloc(8),i=[r,r+4],a=new TextEncoder;function o(t){if(typeof t!=`string`)return 0;let n=a.encode(t),r=e._sqlite3_malloc(n.byteLength+1);return e.HEAPU8.set(n,r),e.HEAPU8[r+n.byteLength]=0,r}function s(e,t){return BigInt(t)<<32n|BigInt(e)&4294967295n}let c=(function(){let e=BigInt(2**53-1)>>32n,t=BigInt(-(2**53-1))>>32n;return function(n,r){return r>e||r<t?s(n,r):r*4294967296+(n&2147483647)-(n&2147483648)}})(),l=new Set;function u(e){if(!l.has(e))throw new h(`not a database`,21)}let d=new Map;function g(e){if(!d.has(e))throw new h(`not a statement`,21)}t.bind_collection=function(e,n){g(e);let r=Array.isArray(n),i=t.bind_parameter_count(e);for(let a=1;a<=i;++a){let i=n[r?a-1:t.bind_parameter_name(e,a)];i!==void 0&&t.bind(e,a,i)}return 0},t.bind=function(e,n,r){switch(g(e),typeof r){case`number`:return r===(r|0)?t.bind_int(e,n,r):t.bind_double(e,n,r);case`string`:return t.bind_text(e,n,r);case`boolean`:return t.bind_int(e,n,+!!r);default:return r instanceof Uint8Array||Array.isArray(r)?t.bind_blob(e,n,r):r===null?t.bind_null(e,n):typeof r==`bigint`?t.bind_int64(e,n,r):r===void 0?27:(console.warn(`unknown binding converted to null`,r),t.bind_null(e,n))}},t.bind_blob=(function(){let t=`sqlite3_bind_blob`,r=e.cwrap(t,..._(`nnnnn:n`));return function(i,a,o){g(i);let s=o.byteLength??o.length,c=e._sqlite3_malloc(s);e.HEAPU8.subarray(c).set(o);let l=r(i,a,c,s,n);return v(t,l,d.get(i))}})(),t.bind_parameter_count=(function(){let t=e.cwrap(`sqlite3_bind_parameter_count`,..._(`n:n`));return function(e){return g(e),t(e)}})(),t.bind_double=(function(){let t=`sqlite3_bind_double`,n=e.cwrap(t,..._(`nnn:n`));return function(e,r,i){g(e);let a=n(e,r,i);return v(t,a,d.get(e))}})(),t.bind_int=(function(){let t=`sqlite3_bind_int`,n=e.cwrap(t,..._(`nnn:n`));return function(e,r,i){if(g(e),i>2147483647||i<-2147483648)return 25;let a=n(e,r,i);return v(t,a,d.get(e))}})(),t.bind_int64=(function(){let t=`sqlite3_bind_int64`,n=e.cwrap(t,..._(`nnnn:n`));return function(e,r,i){if(g(e),i>f||i<p)return 25;let a=i&4294967295n,o=i>>32n,s=n(e,r,Number(a),Number(o));return v(t,s,d.get(e))}})(),t.bind_null=(function(){let t=`sqlite3_bind_null`,n=e.cwrap(t,..._(`nn:n`));return function(e,r){g(e);let i=n(e,r);return v(t,i,d.get(e))}})(),t.bind_parameter_name=(function(){let t=e.cwrap(`sqlite3_bind_parameter_name`,..._(`n:s`));return function(e,n){return g(e),t(e,n)}})(),t.bind_text=(function(){let t=`sqlite3_bind_text`,r=e.cwrap(t,..._(`nnnnn:n`));return function(e,i,a){g(e);let s=o(a),c=r(e,i,s,-1,n);return v(t,c,d.get(e))}})(),t.changes=(function(){let t=e.cwrap(`sqlite3_changes`,..._(`n:n`));return function(e){return u(e),t(e)}})(),t.clear_bindings=(function(){let t=`sqlite3_clear_bindings`,n=e.cwrap(t,..._(`n:n`));return function(e){g(e);let r=n(e);return v(t,r,d.get(e))}})(),t.close=(function(){let t=`sqlite3_close`,n=e.cwrap(t,..._(`n:n`),{async:!0});return async function(e){u(e);let r=await n(e);return l.delete(e),v(t,r,e)}})(),t.column=function(n,r){g(n);let i=t.column_type(n,r);switch(i){case 4:return t.column_blob(n,r);case 2:return t.column_double(n,r);case 1:let a=t.column_int(n,r),o=e.getTempRet0();return c(a,o);case 5:return null;case 3:return t.column_text(n,r);default:throw new h(`unknown type`,i)}},t.column_blob=(function(){let n=e.cwrap(`sqlite3_column_blob`,..._(`nn:n`));return function(r,i){g(r);let a=t.column_bytes(r,i),o=n(r,i);return e.HEAPU8.subarray(o,o+a)}})(),t.column_bytes=(function(){let t=e.cwrap(`sqlite3_column_bytes`,..._(`nn:n`));return function(e,n){return g(e),t(e,n)}})(),t.column_count=(function(){let t=e.cwrap(`sqlite3_column_count`,..._(`n:n`));return function(e){return g(e),t(e)}})(),t.column_double=(function(){let t=e.cwrap(`sqlite3_column_double`,..._(`nn:n`));return function(e,n){return g(e),t(e,n)}})(),t.column_int=(function(){let t=e.cwrap(`sqlite3_column_int64`,..._(`nn:n`));return function(e,n){return g(e),t(e,n)}})(),t.column_int64=(function(){let t=e.cwrap(`sqlite3_column_int64`,..._(`nn:n`));return function(n,r){return g(n),s(t(n,r),e.getTempRet0())}})(),t.column_name=(function(){let t=e.cwrap(`sqlite3_column_name`,..._(`nn:s`));return function(e,n){return g(e),t(e,n)}})(),t.column_names=function(e){let n=[],r=t.column_count(e);for(let i=0;i<r;++i)n.push(t.column_name(e,i));return n},t.column_text=(function(){let t=e.cwrap(`sqlite3_column_text`,..._(`nn:s`));return function(e,n){return g(e),t(e,n)}})(),t.column_type=(function(){let t=e.cwrap(`sqlite3_column_type`,..._(`nn:n`));return function(e,n){return g(e),t(e,n)}})(),t.create_function=function(t,n,r,i,a,o,s,c){u(t);function l(t){return t instanceof m?(async(n,r,i)=>t(n,e.HEAP32.subarray(i/4,i/4+r))):((n,r,i)=>t(n,e.HEAP32.subarray(i/4,i/4+r)))}return v(`sqlite3_create_function`,e.create_function(t,n,r,i,a,o&&l(o),s&&l(s),c),t)},t.data_count=(function(){let t=e.cwrap(`sqlite3_data_count`,..._(`n:n`));return function(e){return g(e),t(e)}})(),t.exec=async function(e,n,r){for await(let i of t.statements(e,n)){let e;for(;await t.step(i)===100;)r&&(e??=t.column_names(i),await r(t.row(i),e))}return 0},t.finalize=(function(){let t=e.cwrap(`sqlite3_finalize`,..._(`n:n`),{async:!0});return async function(e){let n=await t(e);return d.delete(e),n}})(),t.get_autocommit=(function(){let t=e.cwrap(`sqlite3_get_autocommit`,..._(`n:n`));return function(e){return t(e)}})(),t.libversion=(function(){let t=e.cwrap(`sqlite3_libversion`,..._(`:s`));return function(){return t()}})(),t.libversion_number=(function(){let t=e.cwrap(`sqlite3_libversion_number`,..._(`:n`));return function(){return t()}})(),t.limit=(function(){let t=e.cwrap(`sqlite3_limit`,..._(`nnn:n`));return function(e,n,r){return t(e,n,r)}})(),t.open_v2=(function(){let t=`sqlite3_open_v2`,n=e.cwrap(t,..._(`snnn:n`),{async:!0});return async function(r,a,s){a||=6,s=o(s);try{let o=await y(()=>n(r,i[0],a,s)),c=e.getValue(i[0],`*`);return l.add(c),e.ccall(`RegisterExtensionFunctions`,`void`,[`number`],[c]),v(t,o),c}finally{e._sqlite3_free(s)}}})(),t.progress_handler=function(t,n,r,i){u(t),e.progress_handler(t,n,r,i)},t.reset=(function(){let t=`sqlite3_reset`,n=e.cwrap(t,..._(`n:n`),{async:!0});return async function(e){g(e);let r=await n(e);return v(t,r,d.get(e))}})(),t.result=function(e,n){switch(typeof n){case`number`:n===(n|0)?t.result_int(e,n):t.result_double(e,n);break;case`string`:t.result_text(e,n);break;default:if(n instanceof Uint8Array||Array.isArray(n))t.result_blob(e,n);else if(n===null)t.result_null(e);else if(typeof n==`bigint`)return t.result_int64(e,n);else console.warn(`unknown result converted to null`,n),t.result_null(e)}},t.result_blob=(function(){let t=e.cwrap(`sqlite3_result_blob`,..._(`nnnn:n`));return function(r,i){let a=i.byteLength??i.length,o=e._sqlite3_malloc(a);e.HEAPU8.subarray(o).set(i),t(r,o,a,n)}})(),t.result_double=(function(){let t=e.cwrap(`sqlite3_result_double`,..._(`nn:n`));return function(e,n){t(e,n)}})(),t.result_int=(function(){let t=e.cwrap(`sqlite3_result_int`,..._(`nn:n`));return function(e,n){t(e,n)}})(),t.result_int64=(function(){let t=e.cwrap(`sqlite3_result_int64`,..._(`nnn:n`));return function(e,n){if(n>f||n<p)return 25;let r=n&4294967295n,i=n>>32n;t(e,Number(r),Number(i))}})(),t.result_null=(function(){let t=e.cwrap(`sqlite3_result_null`,..._(`n:n`));return function(e){t(e)}})(),t.result_text=(function(){let t=e.cwrap(`sqlite3_result_text`,..._(`nnnn:n`));return function(e,r){let i=o(r);t(e,i,-1,n)}})(),t.row=function(n){let r=[],i=t.data_count(n);for(let a=0;a<i;++a){let i=t.column(n,a);r.push(i?.buffer===e.HEAPU8.buffer?i.slice():i)}return r},t.set_authorizer=function(t,n,r){u(t);function i(t,n,r,i,a,o){return[t,n,e.UTF8ToString(r),e.UTF8ToString(i),e.UTF8ToString(a),e.UTF8ToString(o)]}function a(e){return e instanceof m?(async(t,n,r,a,o,s)=>e(...i(t,n,r,a,o,s))):((t,n,r,a,o,s)=>e(...i(t,n,r,a,o,s)))}return v(`sqlite3_set_authorizer`,e.set_authorizer(t,a(n),r),t)},t.sql=(function(){let t=e.cwrap(`sqlite3_sql`,..._(`n:s`));return function(e){return g(e),t(e)}})(),t.statements=function(n,r,i={}){let o=e.cwrap(`sqlite3_prepare_v3`,`number`,[`number`,`number`,`number`,`number`,`number`,`number`],{async:!0});return(async function*(){let s=[];try{let c=a.encode(r),l=c.byteLength-c.byteLength%4+12,u=e._sqlite3_malloc(l),f=u+c.byteLength+1;s.push(()=>e._sqlite3_free(u)),e.HEAPU8.set(c,u),e.HEAPU8[f-1]=0;let p=u+l-8,m=u+l-4,h;function g(){h&&!i.unscoped&&t.finalize(h),h=0}s.push(g),e.setValue(m,u,`*`);do{g();let t=e.getValue(m,`*`),r=await y(()=>o(n,t,f-m,i.flags||0,p,m));r!==0&&v(`sqlite3_prepare_v3`,r,n),h=e.getValue(p,`*`),h&&(d.set(h,n),yield h)}while(h)}finally{for(;s.length;)s.pop()()}})()},t.step=(function(){let t=`sqlite3_step`,n=e.cwrap(t,..._(`n:n`),{async:!0});return async function(e){g(e);let r=await y(()=>n(e));return v(t,r,d.get(e),[100,101])}})(),t.commit_hook=function(t,n){u(t),e.commit_hook(t,n)},t.update_hook=function(t,n){u(t);function r(t,n,r,i,a){return[t,e.UTF8ToString(n),e.UTF8ToString(r),s(i,a)]}function i(e){return e instanceof m?(async(t,n,i,a,o)=>e(...r(t,n,i,a,o))):((t,n,i,a,o)=>e(...r(t,n,i,a,o)))}e.update_hook(t,i(n))},t.value=function(n){let r=t.value_type(n);switch(r){case 4:return t.value_blob(n);case 2:return t.value_double(n);case 1:let i=t.value_int(n),a=e.getTempRet0();return c(i,a);case 5:return null;case 3:return t.value_text(n);default:throw new h(`unknown type`,r)}},t.value_blob=(function(){let n=e.cwrap(`sqlite3_value_blob`,..._(`n:n`));return function(r){let i=t.value_bytes(r),a=n(r);return e.HEAPU8.subarray(a,a+i)}})(),t.value_bytes=(function(){let t=e.cwrap(`sqlite3_value_bytes`,..._(`n:n`));return function(e){return t(e)}})(),t.value_double=(function(){let t=e.cwrap(`sqlite3_value_double`,..._(`n:n`));return function(e){return t(e)}})(),t.value_int=(function(){let t=e.cwrap(`sqlite3_value_int64`,..._(`n:n`));return function(e){return t(e)}})(),t.value_int64=(function(){let t=e.cwrap(`sqlite3_value_int64`,..._(`n:n`));return function(n){return s(t(n),e.getTempRet0())}})(),t.value_text=(function(){let t=e.cwrap(`sqlite3_value_text`,..._(`n:s`));return function(e){return t(e)}})(),t.value_type=(function(){let t=e.cwrap(`sqlite3_value_type`,..._(`n:n`));return function(e){return t(e)}})(),t.vfs_register=function(t,n){return v(`sqlite3_vfs_register`,e.vfs_register(t,n))};function v(t,n,r=null,i=[0]){if(i.includes(n))return n;throw new h(r?e.ccall(`sqlite3_errmsg`,`string`,[`number`],[r]):t,n)}async function y(t){let n;do e.retryOps.length&&(await Promise.all(e.retryOps),e.retryOps=[]),n=await t();while(n&&e.retryOps.length);return n}return t}function _(e){let t=[],n=e.match(/([ns@]*):([nsv@])/);switch(n[2]){case`n`:t.push(`number`);break;case`s`:t.push(`string`);break;case`v`:t.push(null)}let r=[];for(let e of n[1])switch(e){case`n`:r.push(`number`);break;case`s`:r.push(`string`)}return t.push(r),t}let v=null;async function y(e){let t=(await import(`./wa-sqlite-B0djVKjO.js`)).default,n=await t();globalThis.sqlite3=g(n);let{OPFSCoopSyncVFS:r}=await import(`./OPFSCoopSyncVFS-D4pzlW1m.js`),i=await r.create(`coop`,n);globalThis.sqlite3.vfs_register(i,!0)}async function b(e=`myfinsheet-client1`,t=!1){return globalThis.sqlite3||await y(t),v||=await globalThis.sqlite3.open_v2(`${e}`),[globalThis.sqlite3,v]}var x=class{constructor(e,t){this.sqlite3=e,this.db=t}async ensureSingleStatement(e){}async sqlExec(e,t,n){await this.ensureSingleStatement(t);try{if(e===`run`){let e=0,r=0;for await(let i of this.sqlite3.statements(this.db,t,{unscoped:!0}))r++,n&&n.length&&this.sqlite3.bind_collection(i,n),await this.sqlite3.step(i),e+=this.sqlite3.changes(this.db),await this.sqlite3.finalize(i);if(r===0)throw Error(`No executable SQL statement found.`);return{changes:e,statementsCount:r}}let{value:r}=await this.sqlite3.statements(this.db,t,{unscoped:!0}).next();if(!r)throw Error(`Failed to prepare statement.`);if(n.length&&this.sqlite3.bind_collection(r,n),e===`get`){let e=null;return await this.sqlite3.step(r)===100&&(e=this.rowToObject(r)),await this.sqlite3.finalize(r),e}if(e===`all`){let e=[];for(;await this.sqlite3.step(r)===100;)e.push(this.rowToObject(r));return await this.sqlite3.finalize(r),e}}catch(e){if(this.sqlite3.get_autocommit(this.db)===0)try{let{value:e}=await this.sqlite3.statements(this.db,`ROLLBACK;`,{unscoped:!0}).next();e&&(await this.sqlite3.step(e),await this.sqlite3.finalize(e))}catch(e){console.warn(`Failed to auto-rollback after SQL error:`,e)}throw e}}async sqlExecEach(e,t,n){await this.ensureSingleStatement(e);let{value:r}=await this.sqlite3.statements(this.db,e,{unscoped:!0}).next();if(!r)throw Error(`Prepare failed`);for(t?.length&&this.sqlite3.bind_collection(r,t);await this.sqlite3.step(r)===100;)n(this.rowToObject(r));await this.sqlite3.finalize(r)}rowToObject(e){let t=this.sqlite3.column_names(e),n=this.sqlite3.row(e),r={};for(let e=0;e<n.length;e++)r[t[e]]=n[e];return r}async sql(e,...t){let n=``,r=[];for(let i=0;i<e.length;i++)n+=e[i],i<t.length&&(n+=`?`,r.push(t[i]));return this.sqlExec(`run`,n,r)}sql(e,...t){let n=e.reduce((e,n,r)=>e+n+(t[r]?`?`:``),``);return{run:()=>this.sqlExec(`run`,n,t),get:()=>this.sqlExec(`get`,n,t),all:()=>this.sqlExec(`all`,n,t),each:()=>this.sqlExecEach(`each`,n,t)}}},S=`CREATE TABLE IF NOT EXISTS account (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    account_type TEXT,
    create_ts DATETIME DEFAULT CURRENT_TIMESTAMP,
    modify_ts DATETIME
);
`,C=`CREATE TABLE IF NOT EXISTS config (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source TEXT NOT NULL,
    source_id TEXT NOT NULL,
    key TEXT NOT NULL,
    value TEXT, -- Stored as JSON string
    config_version TEXT DEFAULT '1',
    valid_from_date DATETIME DEFAULT '1970-01-01 00:00:00',
    valid_to_date DATETIME,
    create_ts DATETIME DEFAULT CURRENT_TIMESTAMP,
    modify_ts DATETIME
);
`,w=`CREATE TABLE IF NOT EXISTS document (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT UNIQUE,
    uri TEXT,
    filename TEXT,
    status TEXT DEFAULT 'CREATED',
    document_type_code TEXT NOT NULL,
    party_code TEXT,
    source TEXT,
    source_id TEXT,
    errmsg TEXT,
    document_date DATETIME,
    password TEXT,
    create_ts DATETIME DEFAULT CURRENT_TIMESTAMP,
    modify_ts DATETIME,
    UNIQUE(source, source_id),
    FOREIGN KEY (document_type_code) REFERENCES document_type(code)
);
`,T=`CREATE TABLE IF NOT EXISTS document_type (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL,
    create_ts DATETIME DEFAULT CURRENT_TIMESTAMP,
    modify_ts DATETIME
);`,E=`CREATE TABLE IF NOT EXISTS entity (
    code TEXT PRIMARY KEY
);`,D=`CREATE TABLE IF NOT EXISTS http_call (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    
    url TEXT NOT NULL,
    method TEXT NOT NULL, -- GET, POST, PUT, DELETE
    request_headers TEXT,

    -- raw, form-multipart, file-binary, no-body
    request_type TEXT,
    
    -- if raw - Stores JSON, TEXT etc directly
    -- if form-multipart -> Stores JSON Array of form mutli-part
    -- if file-binary -> Store opfs file uri
    -- else null
    request_body TEXT,
    

    status_code INTEGER, 
    response_headers TEXT,
    
    -- json. text, binary
    response_type TEXT,

    -- if json store directly
    -- else store opfs path
    response_body TEXT,

    duration_ms INTEGER, -- Total time elapsed
    
    error_message TEXT,  -- Stack trace or "Timeout" string
    error_trace TEXT,
    ip_address TEXT,     -- Useful for debugging connectivity
    
    -- Timing
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`,O=`CREATE TABLE IF NOT EXISTS mail_attachment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    remail_id TEXT NOT NULL,
    filename TEXT,
    mime_type TEXT,
    size INTEGER,
    uri TEXT,
    content_hash TEXT UNIQUE NOT NULL,
    FOREIGN KEY (remail_id) REFERENCES remail(id)
);`,k=`CREATE TABLE IF NOT EXISTS records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    document_code TEXT NOT NULL,
    document_party_code TEXT NOT NULL,
    json TEXT NOT NULL,
    checksum TEXT NOT NULL UNIQUE,
    status TEXT DEFAULT 'NEW',
    create_ts DATETIME DEFAULT CURRENT_TIMESTAMP,
    modify_ts DATETIME,
    FOREIGN KEY (document_code) REFERENCES document(code)
);

CREATE INDEX IF NOT EXISTS idx_records_checksum ON records(checksum);
`,A=`CREATE TABLE IF NOT EXISTS remail (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    from_email TEXT,
    subject TEXT,
    text TEXT,
    uri TEXT,
    content_hash TEXT UNIQUE NOT NULL,
    create_ts DATETIME,
    modify_ts DATETIME
);`,j=`CREATE TABLE IF NOT EXISTS request (
  id TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  method TEXT NOT NULL,
  headers JSON,
  body JSON,
  create_ts DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);`,M=`CREATE TABLE IF NOT EXISTS response (
    id TEXT PRIMARY KEY,
    status_code INTEGER,
    headers JSON,
    body JSON,
    uri TEXT,
    create_ts DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    cached_until DATETIME
);`,N=`CREATE TABLE IF NOT EXISTS secrets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  source TEXT NOT NULL,
  source_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  secret_type TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,

  valid_from_date DATETIME NOT NULL DEFAULT '1900-01-01T00:00:00Z',
  valid_to_date DATETIME DEFAULT NULL,

  password TEXT,

  create_ts DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modify_ts DATETIME,

  -- Ensure valid date range
  CHECK (
    valid_to_date IS NULL
    OR valid_to_date > valid_from_date
  ),

  -- Prevent duplicate versions for same secret
  UNIQUE (
    source,
    source_id,
    version,
    secret_type,
    key
  )
);`,P=`-- Individual task execution record.
-- One row per node execution within any workflow (standalone or DAG-triggered).
-- DAG runs are grouped by trace_id; graph structure is captured in parents / children.
--
-- Column notes
-- ─────────────
-- task_name     References a handler registered in TaskRegistry (not a FK — registry is in-memory)
-- namespace     Logical grouping; equals dag_name for orchestrated tasks, 'default' otherwise
-- parents       JSON string[]  – UUIDs of TaskRecords that must complete before this one starts
-- children      JSON string[]  – UUIDs of TaskRecords that this one unblocks (backfilled on completion)
-- depth         0 for root nodes; incremented per graph level
-- input_args    JSON any[]     – merged args passed to the handler
-- output_result JSON           – value returned by the handler (null on failure)
-- trace_id      Links all task rows belonging to a single DAG run together
-- server_ref    External/backend task ID for cross-system correlation

CREATE TABLE IF NOT EXISTS task (

    -- IDENTIFICATION
    id          TEXT    PRIMARY KEY NOT NULL,           -- UUID (uuidv7)
    task_name   TEXT    NOT NULL,                       -- Key into in-memory TaskRegistry

    -- DAG / GRAPH LOGIC
    namespace   TEXT    NOT NULL DEFAULT 'default',
    parents     TEXT    NOT NULL DEFAULT '[]',          -- JSON string[] of task UUIDs
    children    TEXT    NOT NULL DEFAULT '[]',          -- JSON string[] of task UUIDs (backfilled)
    depth       INTEGER NOT NULL DEFAULT 0,

    -- STATE
    status      TEXT    NOT NULL,                       -- See TaskLifeCycle constants

    -- DATA FLOW
    input_args    TEXT,                                 -- JSON any[] – args passed to handler
    output_result TEXT,                                 -- JSON – handler return value

    -- PERFORMANCE & METRICS
    created_at  INTEGER NOT NULL,                       -- Unix ms
    started_at  INTEGER,                                -- Unix ms – set when handler begins
    finished_at INTEGER,                                -- Unix ms – set when handler resolves/rejects

    -- ERROR DETAIL
    error_details TEXT,                                 -- Message + stack trace on failure

    -- TRACING & EXTERNAL
    trace_id    TEXT,                                   -- Groups all nodes of one DAG run
    run_args    TEXT,                                   -- JSON string – snapshot of dynamic DAG globals at this step
    server_ref  TEXT,                                   -- Backend / remote task reference
    retry_count INTEGER NOT NULL DEFAULT 0


);

-- Most common access patterns
CREATE INDEX IF NOT EXISTS idx_task_status       ON task (status);
CREATE INDEX IF NOT EXISTS idx_task_trace        ON task (trace_id);
-- CREATE INDEX IF NOT EXISTS idx_task_name_status  ON task (task_name, status);
CREATE INDEX IF NOT EXISTS idx_task_namespace    ON task (namespace);`,F=`-- DAG (Directed Acyclic Graph) definition table.
-- Stores workflow blueprints; each row is a named, reusable DAG.
-- Actual execution records live in the \`task\` table and are linked via trace_id.
--
-- Column notes
-- ─────────────
-- global_args   JSON Record<string,any>  – default args merged into every node at dispatch time
-- nodes         JSON DagNodeDef[]        – [{ task_name, children: string[], default_args: {} }]
-- from_ts       Unix ms – DAG is triggerable only after this timestamp (NULL = no lower bound)
-- till_ts       Unix ms – DAG expires after this timestamp (NULL = never expires)
-- trigger_type  MANUAL | CRON | EVENT
-- on_failure    FAIL_FAST | CONTINUE | RETRY_LEAF
-- max_concurrent 0 = unlimited concurrent runs of this DAG
-- version       Incremented on each logical update; lets you trace which version a run used
-- tags          JSON string[] – free-form labels for filtering / grouping

CREATE TABLE IF NOT EXISTS task_dag (

    -- IDENTIFICATION
    id          TEXT    PRIMARY KEY NOT NULL,           -- UUID (uuidv7)
    dag_name    TEXT    NOT NULL UNIQUE,         -- Stable human-readable key used at runtime
    description TEXT,

    -- DEFINITION (serialised as JSON)
    global_args TEXT    NOT NULL DEFAULT '{}',          -- JSON Record<string, any>
    nodes       TEXT    NOT NULL DEFAULT '[]',          -- JSON DagNodeDef[]

    -- Content fingerprint — md5(stableStringify({ global_args, nodes, on_failure, trigger_type, max_concurrent }))
    -- addDag() compares this hash to detect whether the definition actually changed.
    hash        TEXT    NOT NULL DEFAULT '',

    -- LIFETIME
    status      TEXT    NOT NULL DEFAULT 'ACTIVE',      -- 'ACTIVE' | 'INACTIVE'
    from_ts     INTEGER,                                -- Unix ms, NULL = no lower bound
    till_ts     INTEGER,                                -- Unix ms, NULL = never expires

    -- EXECUTION POLICIES
    trigger_type    TEXT    NOT NULL DEFAULT 'MANUAL',       -- 'MANUAL' | 'CRON' | 'EVENT'
    on_failure      TEXT    NOT NULL DEFAULT 'FAIL_FAST',    -- 'FAIL_FAST' | 'CONTINUE' | 'RETRY_LEAF'
    max_concurrent  INTEGER NOT NULL DEFAULT 0,              -- 0 = unlimited

    -- VERSIONING & AUDIT
    version             INTEGER NOT NULL DEFAULT 1,
    tags                TEXT,                           -- JSON string[]
    created_at          INTEGER NOT NULL,               -- Unix ms
    updated_at          INTEGER NOT NULL,               -- Unix ms
    created_by          TEXT,
    last_triggered_at   INTEGER                         -- Denormalised; updated on each trigger

);

-- Fast lookup by name (most common access pattern)
-- CREATE INDEX IF NOT EXISTS idx_task_dag_name   ON task_dag (dag_name, version);

-- Queries for active + within-window DAGs (used by orchestrator loadDags())
CREATE INDEX IF NOT EXISTS idx_task_dag_status        ON task_dag (status);
CREATE INDEX IF NOT EXISTS idx_task_dag_window        ON task_dag (status, from_ts, till_ts);

-- Enables O(1) "has definition changed?" check without reading large JSON columns
CREATE UNIQUE INDEX IF NOT EXISTS idx_task_dag_hash          ON task_dag (dag_name, hash);
`,I=`CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    record_id INTEGER NOT NULL,
    document_code TEXT NOT NULL,
    document_type_code TEXT NOT NULL,
    document_party_code TEXT NOT NULL,
    date DATE NOT NULL,
    transaction_reference TEXT,
    transaction_method TEXT,
    description TEXT NOT NULL,
    from_account TEXT,
    to_account TEXT,
    amount REAL NOT NULL,
    closing_balance REAL,
    status TEXT DEFAULT 'NEW',
    create_ts DATETIME DEFAULT CURRENT_TIMESTAMP,
    modify_ts DATETIME,
    FOREIGN KEY (record_id) REFERENCES records(id),
    FOREIGN KEY (document_code) REFERENCES document(code),
    FOREIGN KEY (document_type_code) REFERENCES document_type(code),
    FOREIGN KEY (from_account) REFERENCES account(code),
    FOREIGN KEY (to_account) REFERENCES account(code)
);

CREATE INDEX IF NOT EXISTS idx_transactions_record_id ON transactions(record_id);
`;function L(){return Object.assign({"./schema/tables/account.sql":S,"./schema/tables/config.sql":C,"./schema/tables/document.sql":w,"./schema/tables/document_type.sql":T,"./schema/tables/entity.sql":E,"./schema/tables/http_call.sql":D,"./schema/tables/mail_attachment.sql":O,"./schema/tables/records.sql":k,"./schema/tables/remail.sql":A,"./schema/tables/request.sql":j,"./schema/tables/response.sql":M,"./schema/tables/secrets.sql":N,"./schema/tables/task.sql":P,"./schema/tables/task_dag.sql":F,"./schema/tables/transactions.sql":I})}async function R(e){let t=L();for(let[n,r]of Object.entries(t))await e.sqlExec(`run`,r,[])}console.log(`Worker running:`,import.meta.url);let z,B,V;self.addEventListener(`error`,e=>{console.error(`Worker runtime error:`,e),self.postMessage({reqId:-1,fatal:!0,error:e.message||`Unknown worker error`})}),self.addEventListener(`unhandledrejection`,e=>{console.error(`Worker unhandled rejection:`,e.reason),self.postMessage({reqId:-1,fatal:!0,error:e.reason?.message||String(e.reason)})}),self.onmessage=async e=>{try{let{reqId:t,type:n,sql:r,params:i,uri:a}=e.data;if(n===`init`)return[z,B]=await b(a,!1),V=new x(z,B),postMessage({reqId:t,result:`ok`});if(!z||!B||!V)throw Error(`Database not initialized. Call init() first.`);if(n===`migrations`)return await R(V),postMessage({reqId:t,result:`migrations-ok`});if(n===`each`){let e=[];return await V.sqlExecEach(r,i,e.push.bind(e)),postMessage({reqId:t,result:e})}let o=await V.sqlExec(n,r,i);postMessage({reqId:t,result:o})}catch(t){console.error(`Worker caught error:`,t),postMessage({reqId:e.data.reqId||-1,error:t.message,stack:t.stack})}};export{i as a,l as c,o as d,d as f,r as i,u as l,t as n,a as o,n as r,s,e as t,c as u};
//# sourceMappingURL=sqlite3.worker-BHDTDMbj.js.map