const CHEFS_URL =
  'https://chat-4b282-default-rtdb.europe-west1.firebasedatabase.app/chefs.json';

// Offline/backup adatforrás (ha a fetch CORS/egyéb ok miatt meghiúsul).
const CHEFS_FALLBACK = [{"base_fee":245,"cuisine":"Italian","daily_rate":175,"description":"An exceptional Italian chef specializing in traditional and modern cuisine with over a decade of experience.","id":1,"image":"https://www.csftw.edu/wp-content/uploads/Types-of-Chefs-1080x675.jpg","name":"Sophia Ricci"},{"base_fee":270,"cuisine":"French","daily_rate":190,"description":"Award-winning French chef known for his creative flair and attention to classic techniques.","id":2,"image":"https://colonialdomestics.com/wp-content/uploads/2023/03/a-successful-chef.jpg","name":"David Keller"},{"base_fee":275,"cuisine":"American","daily_rate":200,"description":"Talented American chef renowned for her innovative dishes and passion for farm-to-table ingredients.","id":3,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9TOmbVyvyi6g6cMFDH6w6XKkyW-FLTiVevw&s","name":"Pamela Dawson"},{"base_fee":280,"cuisine":"European","daily_rate":200,"description":"Highly skilled European chef blending traditional flavors with modern culinary artistry.","id":4,"image":"https://www.escoffier.edu/wp-content/uploads/2022/03/Smiling-male-chef-with-white-coat-and-hat-768.jpg","name":"Marcus Evans"},{"base_fee":265,"cuisine":"Mexican","daily_rate":190,"description":"Passionate Mexican chef celebrated for authentic flavors and colorful presentations.","id":5,"image":"https://www.baker.edu/wp-content/uploads/what-is-a-sous-chef.jpg","name":"Camila Ortega"},{"base_fee":240,"cuisine":"German","daily_rate":170,"description":"Dedicated German chef with expertise in hearty, traditional, and contemporary German cuisine.","id":6,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobvimtzpqrIee7fVumEiluGa-cpilZegOaQ&s","name":"Oscar Weber"},{"base_fee":270,"cuisine":"Vegetarian","daily_rate":190,"description":"Innovative vegetarian chef who creates stunning plant-based dishes full of flavor and creativity.","id":7,"image":"https://www.totaljobs.com/advice/wp-content/uploads/Sous-Chef-job-description_5719402.jpg","name":"Tiffany Moore"},{"base_fee":245,"cuisine":"Eastern European","daily_rate":175,"description":"Master of Eastern European cuisine, blending authentic recipes with a modern twist.","id":8,"image":"https://www.shutterstock.com/image-photo/professional-chef-creating-flame-while-600nw-2753552019.jpg","name":"Peter Novak"},{"base_fee":250,"cuisine":"Asian","daily_rate":180,"description":"Talented Asian cuisine expert known for fresh, vibrant flavors and beautiful plating.","id":9,"image":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_30,w_750/f_auto/what-is-a-sous-chef-phpiJ1Vph","name":"Olivia Bennett"},{"base_fee":300,"cuisine":"Argentinian","daily_rate":210,"description":"Expert Argentinian chef specializing in grilled meats and traditional South American dishes.","id":10,"image":"https://humanfocus.co.uk/wp-content/uploads/difference-between-a-chef-and-a-cook.jpg","name":"Roberto Holz"},{"base_fee":260,"cuisine":"Greek","daily_rate":185,"description":"Gifted Greek chef delivering authentic Mediterranean flavors with a contemporary style.","id":11,"image":"https://images.squarespace-cdn.com/content/v1/6314a2dcf6b5811cc39fb908/1666191779086-EJCU9KPHUQR10E81GDT9/chef+pam+main+home_.png","name":"Claire Johnson"},{"base_fee":235,"cuisine":"Portuguese","daily_rate":165,"description":"Authentic Portuguese chef celebrated for his mastery of seafood and traditional pastries.","id":12,"image":"https://f.hubspotusercontent00.net/hubfs/5369657/Roberto%20Holz-1.jpg","name":"Carlos Mendes"},{"base_fee":250,"cuisine":"Korean","daily_rate":180,"description":"Innovative Korean chef bringing rich flavors and modern interpretations to classic dishes.","id":13,"image":"https://chefgear.co.za/cdn/shop/products/ChefGearChefHat-CUL214WHITE_2400x.png?v=1662023440","name":"Nina Kim"},{"base_fee":275,"cuisine":"African","daily_rate":190,"description":"Dynamic African cuisine specialist famous for bold spices and creative presentations.","id":14,"image":"https://d1zzxdyvtq79bu.cloudfront.net/uploads/images/cache/big/59/13/59133.jpg","name":"Trenin Nubiru"},{"base_fee":255,"cuisine":"French","daily_rate":185,"description":"Highly skilled French chef blending timeless recipes with a modern, artistic approach.","id":15,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrs-5oXUOs0T6O6uAyBMh3Oa-pX4aenXj1WnMVuT6gXfxWfh119Rjd0qgYGMEgrQVMtQ&usqp=CAU","name":"Amelie Laurent"},{"base_fee":265,"cuisine":"Japanese","daily_rate":195,"description":"Acclaimed Japanese chef with a passion for precision, freshness, and elegant plating.","id":16,"image":"https://www.escoffier.edu/wp-content/uploads/2023/11/Escoffier-graduate-Trenin-Nubiru-stands-proudly-smiling-in-an-Escoffier-kitchen-768.jpg","name":"Victor Lee"},{"base_fee":235,"cuisine":"British","daily_rate":170,"description":"Talented British chef known for elevating classic comfort food with contemporary techniques.","id":17,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ93FKw1kKJQIMF4Swav8N6FpVhe_BIqcpsg&s","name":"Elisa Turner"},{"base_fee":255,"cuisine":"Indian","daily_rate":185,"description":"Master Indian chef delivering rich, authentic flavors with a creative and modern flair.","id":18,"image":"https://metrobi.com/wp-content/uploads/2024/06/sous-chef.webp","name":"Anil Sharma"},{"base_fee":240,"cuisine":"Belgian","daily_rate":170,"description":"Passionate Belgian chef specializing in fine pastries, chocolates, and hearty Belgian meals.","id":19,"image":"https://www.escoffier.edu/wp-content/uploads/2021/12/tiffany-moore.jpeg","name":"Isabelle Dubois"},{"base_fee":260,"cuisine":"Spanish","daily_rate":185,"description":"Experienced Spanish chef creating vibrant tapas and traditional Mediterranean specialties.","id":20,"image":"https://www.escoffier.edu/wp-content/uploads/2022/03/Culinary-student-cutting-vegetables-while-smiling-chef-instructor-observes-768.jpeg","name":"Alejandro Torres"},{"base_fee":230,"cuisine":"Austrian","daily_rate":165,"description":"Exceptional Austrian chef bringing classic alpine dishes to life with a modern touch.","id":21,"image":"https://news.disneylandparis.com//app/uploads/2024/10/Bistrot-Chez-Remy-2.jpg","name":"Greta Fischer"},{"base_fee":230,"cuisine":"Irish","daily_rate":160,"description":"Skilled Irish chef renowned for his hearty, rustic cooking and warm hospitality.","id":22,"image":"https://aaft.com/blog/wp-content/uploads/2024/09/pikaso_texttoimage_Steps-to-Becoming-a-Professional-Chef-in-India.jpeg","name":"James Holt"},{"base_fee":245,"cuisine":"Caribbean","daily_rate":175,"description":"Creative Caribbean chef blending tropical flavors with vibrant, colorful presentations.","id":23,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEI8dtLy6XhdqG436WiQUMOwCD64iRsh7-eNaTWxOc4PXYz-3eeHqqoK8IOD6a3AuB2XE&usqp=CAU","name":"Ava Martinez"},{"base_fee":240,"cuisine":"Swiss","daily_rate":170,"description":"Expert Swiss chef excelling in fondue, chocolate creations, and traditional alpine dishes.","id":24,"image":"https://colonialdomestics.com/wp-content/uploads/2023/03/a-successful-chef.jpg","name":"Nicolas Moreau"},{"base_fee":280,"cuisine":"Modern American","daily_rate":200,"description":"Visionary Modern American chef fusing global influences into stunning contemporary dishes.","id":25,"image":"https://www.ecpi.edu/sites/default/files/CIV%20Sept%2026.png","name":"Brooke Baevsky"},{"base_fee":250,"cuisine":"Middle Eastern","daily_rate":180,"description":"Award-winning Middle Eastern chef creating rich, aromatic dishes with authentic spices.","id":26,"image":"https://www.escoffier.edu/wp-content/uploads/2022/03/Smiling-male-chef-with-white-coat-and-hat-768.jpg","name":"Samir Patel"},{"base_fee":250,"cuisine":"Italian","daily_rate":180,"description":"Dedicated Italian chef with a passion for handcrafted pasta and rustic Mediterranean cuisine.","id":27,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobvimtzpqrIee7fVumEiluGa-cpilZegOaQ&s","name":"Luca Bianchi"}];

// A feladatban a bérlés POST endpoint nincs megadva.
// Ezért itt egy tipikus Firebase Realtime Database írási minta szerepel.
// Ha a backend más endpointot vár, itt kell módosítani.
const BOOKINGS_URL =
  'https://p161-7ddfd-default-rtdb.europe-west1.firebasedatabase.app/bookings.json';

/** @type {Array<{id:number,name:string,cuisine:string,description:string,image:string,base_fee:number,daily_rate:number}>} */
let chefs = [];
let filtered = [];

const el = {
  statusPill: document.getElementById('statusPill'),
  listInfo: document.getElementById('listInfo'),
  chefsGrid: document.getElementById('chefsGrid'),
  emptyState: document.getElementById('emptyState'),

  nameSearch: document.getElementById('nameSearch'),
  cuisineSearch: document.getElementById('cuisineSearch'),
  clearBtn: document.getElementById('clearBtn'),
  resultsMeta: document.getElementById('resultsMeta'),

  chefSelect: document.getElementById('chefSelect'),
  selectedChefId: document.getElementById('selectedChefId'),
  bookingForm: document.getElementById('bookingForm'),
  userId: document.getElementById('userId'),
  fromDate: document.getElementById('fromDate'),
  days: document.getElementById('days'),
  formMessage: document.getElementById('formMessage'),
  prefillFromSelected: document.getElementById('prefillFromSelected')
};

function setPill(text, variant) {
  el.statusPill.textContent = text;
  el.statusPill.style.borderColor =
    variant === 'ok'
      ? 'rgba(34,197,94,.55)'
      : variant === 'err'
        ? 'rgba(239,68,68,.55)'
        : 'rgba(255,255,255,.10)';
  el.statusPill.style.color =
    variant === 'ok'
      ? 'rgba(34,197,94,.95)'
      : variant === 'err'
        ? 'rgba(239,68,68,.95)'
        : 'rgba(255,255,255,.68)';
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '<')
    .replaceAll('>', '>')
    .replaceAll('"', '"')
    .replaceAll("'", '&#039;');
}

function formatMoney(n) {
  const num = Number(n);
  if (Number.isNaN(num)) return String(n);
  return `${num} €`;
}





function renderChefs(list) {



  el.chefsGrid.innerHTML = '';

  if (!list.length) {
    el.emptyState.hidden = false;
    el.listInfo.textContent = 'Nincs megjeleníthető séf';
    el.resultsMeta.textContent = '0 találat';
    return;
  }

  el.emptyState.hidden = true;
  el.listInfo.textContent = 'Találatok';
  el.resultsMeta.textContent = `${list.length} találat`;

  const frag = document.createDocumentFragment();

  for (const chef of list) {
    const card = document.createElement('article');
    card.className = 'chef';
    card.setAttribute('role', 'listitem');

    card.innerHTML = `
      <img class="chef__img" src="${escapeHtml(chef.image)}" alt="${escapeHtml(
      chef.name
    )}" loading="lazy" />
      <div class="chef__body">
        <div class="chef__title">${escapeHtml(chef.name)}</div>
        <div class="chef__meta">
          <span class="badge">${escapeHtml(chef.cuisine)}</span>
          <span class="badge">Alap bérleti díj: ${escapeHtml(
            formatMoney(chef.base_fee)
          )}</span>
          <span class="badge">Napi: ${escapeHtml(formatMoney(chef.daily_rate))}</span>
        </div>
        <div class="chef__desc">${escapeHtml(chef.description)}</div>
        <div class="chef__actions">
          <button class="smallBtn" type="button" data-chef-id="${escapeHtml(
            chef.id
          )}">Béreljem</button>
        </div>
      </div>
    `;

    card.querySelector('button[data-chef-id]')?.addEventListener('click', () => {
      el.selectedChefId.value = String(chef.id);
      el.chefSelect.value = String(chef.id);
      // scroll a formra
      el.bookingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      showFormMessage(
        'A kiválasztott séf beállítva. Készen állsz a bérléshez.',
        'ok'
      );
    });

    frag.appendChild(card);
  }

  el.chefsGrid.appendChild(frag);
}

function applyFilters() {
  const nameQ = (el.nameSearch.value || '').trim().toLowerCase();
  const cuisineQ = (el.cuisineSearch.value || '').trim().toLowerCase();

  filtered = chefs.filter((c) => {
    const matchesName = !nameQ || c.name?.toLowerCase().includes(nameQ);
    const matchesCuisine = !cuisineQ || c.cuisine?.toLowerCase().includes(cuisineQ);
    return matchesName && matchesCuisine;
  });

  renderChefs(filtered);
}

function rebuildChefSelect() {
  const prev = el.chefSelect.value;
  el.chefSelect.innerHTML = '<option value="" selected disabled>Válassz séfet…</option>';

  for (const chef of chefs) {
    const opt = document.createElement('option');
    opt.value = String(chef.id);
    opt.textContent = `${chef.name} (${chef.cuisine})`;
    el.chefSelect.appendChild(opt);
  }

  if (prev) el.chefSelect.value = prev;
}

function showFormMessage(text, variant) {
  el.formMessage.hidden = false;
  el.formMessage.classList.remove('alert--ok', 'alert--err');
  el.formMessage.classList.add(variant === 'ok' ? 'alert--ok' : 'alert--err');
  el.formMessage.textContent = text;
}

async function loadChefs() {
  // Alap UX: ha nincs betöltés, akkor is legyen mit keresni.
  chefs = Array.isArray(CHEFS_FALLBACK) ? CHEFS_FALLBACK : [];
  filtered = chefs.slice();
  renderChefs(filtered);
  rebuildChefSelect();
  setPill(`Betöltve: ${chefs.length} séf (default)`, chefs.length ? 'ok' : 'err');

  try {
    setPill('Betöltés…', 'idle');
    el.listInfo.textContent = 'Betöltés…';

    const res = await fetch(CHEFS_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    chefs = Array.isArray(data) ? data : [];

    // alap case: rendezés név szerint (jobb UX)
    chefs.sort((a, b) => (a.name || '').localeCompare(b.name || ''));

    filtered = chefs.slice();
    renderChefs(filtered);
    rebuildChefSelect();

    if (chefs.length) {
      setPill(`Betöltve: ${chefs.length} séf`, 'ok');
    } else {
      setPill('Nincs adat', 'err');
    }
  } catch (e) {
    // fallback: ha a fetch/CORS/net hibázik, akkor garantáltan legyen tartalom a kereséshez
    chefs = Array.isArray(CHEFS_FALLBACK) ? CHEFS_FALLBACK : [];
    chefs.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    filtered = chefs.slice();
    renderChefs(filtered);
    rebuildChefSelect();
    setPill(`Betöltve: ${chefs.length} séf (fallback)`, chefs.length ? 'ok' : 'err');

    if (!chefs.length) el.listInfo.textContent = 'Hiba történt a betöltés során';

    // üresnél hiba log, különben marad a fallback UX
    if (!chefs.length) {
      console.error(e);
    }

    console.error(e);
    setPill('Betöltés sikertelen', 'err');
    el.listInfo.textContent = 'Hiba történt a betöltés során';
    renderChefs([]);
  }
}

async function submitBooking(e) {
  e.preventDefault();

  const chefId = el.chefSelect.value || el.selectedChefId.value;
  const userId = Number(el.userId.value);
  const fromDate = el.fromDate.value;
  const days = Number(el.days.value);

  if (!chefId) {
    showFormMessage('Válassz ki egy séfet a bérléshez.', 'err');
    return;
  }
  if (!Number.isFinite(userId) || userId <= 0) {
    showFormMessage('A megadott userId érvénytelen.', 'err');
    return;
  }
  if (!fromDate) {
    showFormMessage('Kérlek add meg a kezdő dátumot.', 'err');
    return;
  }
  if (!Number.isFinite(days) || days <= 0) {
    showFormMessage('A napok száma legyen 1 vagy nagyobb.', 'err');
    return;
  }

  const payload = {
    chefId: Number(chefId),
    userId,
    fromDate,
    days,
    createdAt: new Date().toISOString()
  };

  el.bookingForm.querySelector('button[type="submit"]')?.setAttribute('disabled', 'true');
  showFormMessage('Bérlés elküldése…', 'ok');

  try {
    const res = await fetch(BOOKINGS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      // Firebase RTDB sokszor 200/204, de ha más backend: legyen robusztus.
      const text = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status} ${text}`);
    }

    // Siker
    showFormMessage('Sikeres bérlés! Hamarosan visszaigazolunk.', 'ok');
  } catch (err) {
    console.error(err);
    showFormMessage(
      'Sikertelen bérlés. Kérlek próbáld újra később (vagy ellenőrizd a backend endpointot).',
      'err'
    );
  } finally {
    el.bookingForm.querySelector('button[type="submit"]')?.removeAttribute('disabled');
  }
}

function init() {
  // date default: ma
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  el.fromDate.value = `${yyyy}-${mm}-${dd}`;

  el.nameSearch.addEventListener('input', applyFilters);
  el.cuisineSearch.addEventListener('input', applyFilters);

  el.clearBtn.addEventListener('click', () => {
    el.nameSearch.value = '';
    el.cuisineSearch.value = '';
    applyFilters();
  });

  el.prefillFromSelected.addEventListener('click', () => {
    if (el.selectedChefId.value) {
      el.chefSelect.value = el.selectedChefId.value;
      showFormMessage('A kiválasztott séf bekerült az űrlapba.', 'ok');
    } else {
      showFormMessage('Előbb válassz ki egy séfet a listából.', 'err');
    }
  });

  el.bookingForm.addEventListener('submit', submitBooking);

  loadChefs();
}

init();

