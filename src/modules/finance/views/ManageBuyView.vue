<template>
  <v-lazy
    :min-height="200"
    :options="{'threshold':0.5}"
    transition="fade-transition"
  >
    <v-container>
      <v-row no-gutters class="mb-10">
        <v-col cols="12" class="text-center">
          <h1 class="pa-2 mt-2">
            DURACIÓN DE TUS COMPRAS
          </h1>
          <p class="text-medium-emphasis">
            "Gestionar la duración de tus compras"
          </p>
          <v-sheet
              tile
              height="4"
              width="40"
              color="primary"
              class="mx-auto"
            ></v-sheet>
        </v-col>
      </v-row>


      <v-card class="p-2">
        <v-card>
          <v-row>
            <v-col>
              <div class="text-center py-4 px-1">
                <v-card>
                  <v-card-text>
                        <v-btn
                          v-if="!user"
                          rounded
                          class="text-white text-subtitle-1 pr-5"
                          color="blue"
                          variant="text"
                          @click="authenticationUserGoogle()"
                        >
                          <svg role="graphics-symbol" viewBox="0 0 20 20" class="googleLogo" style="width: 14px; height: 14px; display: block; fill: inherit; flex-shrink: 0; margin-right: 6px;"><g><path d="M19.9996 10.2297C19.9996 9.54995 19.9434 8.8665 19.8234 8.19775H10.2002V12.0486H15.711C15.4823 13.2905 14.7475 14.3892 13.6716 15.0873V17.586H16.9593C18.89 15.8443 19.9996 13.2722 19.9996 10.2297Z" fill="#4285F4"></path><path d="M10.2002 20.0003C12.9518 20.0003 15.2723 19.1147 16.963 17.5862L13.6753 15.0875C12.7606 15.6975 11.5797 16.0429 10.2039 16.0429C7.54224 16.0429 5.28544 14.2828 4.4757 11.9165H1.08301V14.4923C2.81497 17.8691 6.34261 20.0003 10.2002 20.0003Z" fill="#34A853"></path><path d="M4.47227 11.9163C4.04491 10.6743 4.04491 9.32947 4.47227 8.0875V5.51172H1.08333C-0.363715 8.33737 -0.363715 11.6664 1.08333 14.4921L4.47227 11.9163Z" fill="#FBBC04"></path><path d="M10.2002 3.95756C11.6547 3.93552 13.0605 4.47198 14.1139 5.45674L17.0268 2.60169C15.1824 0.904099 12.7344 -0.0292099 10.2002 0.000185607C6.34261 0.000185607 2.81497 2.13136 1.08301 5.51185L4.47195 8.08764C5.27795 5.71762 7.53849 3.95756 10.2002 3.95756Z" fill="#EA4335"></path></g></svg>
                          Continuar con Google 
                        </v-btn>
                        <v-btn
                          v-if="user"
                          class="me-1"
                          type="submit"
                          rounded="xl"
                          variant="outlined"
                          color="error"
                          @click="closeUserGoogle()"
                        >
                          Salir
                        </v-btn>

                        <div class="mx-auto text-center">
                          <v-avatar
                          >
                              <v-icon icon="mdi-account-heart"></v-icon>
                          </v-avatar>

                          <h5>{{  user?.displayName || 'USUARIO INVITADO'}}</h5>
                          <p class="text-caption mt-1">
                              {{  user?.email || 'Sin email'}}
                          </p>
                        </div>
                      </v-card-text>
                    </v-card>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-card>
          <v-row>
            <v-col>
              <div class="text-center py-4 px-1">
                <v-chip
                  class="ma-2"
                  color="blue-grey-darken-2"
                  text-color="white"
                  append-icon="mdi-format-list-bulleted"
                >
                  Registros:  N° {{ products.length }}
                </v-chip>

                <v-chip
                  class="ma-2"
                  color="blue-grey-darken-2"
                  text-color="white"
                  append-icon="mdi-cash-multiple"
                >
                  Total gastado:  S/{{ totalSpent() }}
                </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="px-2">
          <v-row>
            <v-col cols="12" class="text-center mt-0">
              <h4 class="mt-2">
                Filtros
              </h4>
              <v-sheet
                  tile
                  height="4"
                  width="40"
                  color="primary"
                  class="mx-auto"
                ></v-sheet>
            </v-col>

            <v-col class="pt-0">
              <div class="text-center px-1">
                <v-row>
                  <v-col cols="12" sm="6" md="3">
                    <v-autocomplete
                      v-model="selectedMonth"
                      label="Mes"
                      required
                      color="primary"
                      variant="outlined"
                      :items="arrayMonth"
                      item-title="name"
                      item-value="id"
                      density="compact"
                    ></v-autocomplete>
                  </v-col>
  
                  <v-col cols="12" sm="6" md="3">
                    <v-autocomplete
                      v-model="selectedYear"
                      label="Año"
                      required
                      color="primary"
                      variant="outlined"
                      density="compact"
                      :items="['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']"
                    ></v-autocomplete>
                  </v-col>  

                  <v-col cols="12" sm="6" md="6" class="text-right">
                    <v-btn
                      density="compact" 
                      color="primary"
                      variant="outlined"
                      class="mb-2 mr-2"
                      @click="getProducts('complete')"
                    >
                      <v-icon icon="mdi-magnify"></v-icon>
                      <v-tooltip
                          activator="parent"
                          location="left"
                        >Buscar productos</v-tooltip>
                    </v-btn>
                    <v-btn
                      density="compact" 
                      color="error"
                      variant="outlined"
                      class="mb-2 mr-2"
                      @click="resetFilter()"
                    >
                      <v-icon icon="mdi-cached"></v-icon>
                      <v-tooltip
                          activator="parent"
                          location="left"
                        >Resetear filtros</v-tooltip>
                    </v-btn>
                  </v-col>  
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-row no-gutters >
          <v-col cols="12" sm="12" md="12" class="mb-4 ml-4">
            <v-dialog
              v-model="dialog"
              persistent
              width="auto"
              style="z-index: 1010 !important;"
            >

              <template v-slot:activator="{ props }">
                <v-sheet cols="12" class="d-flex mb-3">
                  <v-sheet class="me-auto pt-1">
                    <v-btn
                      density="compact" 
                      icon="mdi-plus"
                      color="primary"
                      v-bind="props"
                      @click="cleanFields"
                      variant="outlined"
                      class="mt-3"
                    >
                      <template v-slot:prepend>
                        <v-icon color="white"></v-icon>
                      </template>
                    </v-btn>
                    <v-tooltip
                        activator="parent"
                        location="left"
                      >Agregar producto
                    </v-tooltip>
                  </v-sheet>
                  <v-sheet class="pt-4 mr-2">
                    <v-col cols="auto" class="pa-0">
                      <v-btn 
                        density="compact" 
                        :icon="sortAscName? 'mdi-sort-alphabetical-descending' : 'mdi-sort-alphabetical-ascending'"
                        variant="outlined"
                        color="primary"
                        @click="sortName"
                        ></v-btn>
                      <v-tooltip
                        activator="parent"
                        location="left"
                      >Ordenar por nombre</v-tooltip>
                    </v-col>
                  </v-sheet>
                  <v-sheet class="pt-4 mr-2" >
                    <v-col cols="auto" class="pa-0">
                      <v-btn 
                        density="compact" 
                        :icon="sortAscPrice? 'mdi-currency-usd' : 'mdi-currency-usd-off' "
                        variant="outlined"
                        color="primary"
                        @click="sortPrice"
                        ></v-btn>
                      <v-tooltip
                        activator="parent"
                        location="left"
                      >Ordenar por precio</v-tooltip>
                    </v-col>
                  </v-sheet>
                  <v-sheet class="pt-4 mr-6">
                    <v-col cols="auto" class="pa-0">
                      <v-btn 
                        density="compact" 
                        :icon="sortAscDaysLeft? 'mdi-sort-calendar-descending' : 'mdi-sort-calendar-ascending'"
                        variant="outlined"
                        color="primary"
                        @click="sortDaysLeft"
                        ></v-btn>
                      <v-tooltip
                        activator="parent"
                        location="left"
                      >Ordenar por fecha finalización</v-tooltip>
                    </v-col>
                  </v-sheet>
                </v-sheet>
  
              </template>

              <v-card>
                <v-card-title class="text-center pt-5">
                  <span class="text-h5 font-weight-bold"> {{ action == 'insert' ? 'Nuevo': 'Actualizar'}} registro</span> <br>
                  <small class="text-caption font-weight-thin">Indica campo requerido (*)</small>
                </v-card-title>
                <v-card-text>
                  <v-container>
                      <v-form ref="form" lazy-validation>
                        <v-row>
                          <v-col cols="12" sm="12" md="6">
                            <v-text-field
                              v-model="item.name"
                              label="Nombre*"
                              required
                              color="blue"
                              variant="outlined"
                              :counter="40"
                              :maxlength="40"
                              :rules="[...validations.fieldTrim]"
                            ></v-text-field>
                          </v-col>
    
                          <v-col cols="12" sm="12" md="6">
                            <v-text-field
                              v-model="item.brand"
                              label="Marca*"
                              required
                              color="blue"
                              variant="outlined"
                              :counter="40"
                              :maxlength="40"
                              :rules="[...validations.fieldTrim]"
                            ></v-text-field>
                          </v-col>
    
                          <v-col cols="12" sm="6">
                              <v-text-field
                                v-model="item.start_date"
                                label="Fecha Inicio*"
                                required
                                color="blue"
                                variant="outlined"
                                type="datetime-local"
                                min="2023-01-01T00:00"
                                :rules="[...validations.fieldTrim]"
                              ></v-text-field>
                          </v-col>
    
                          <v-col cols="12" sm="12" md="6">
                            <v-text-field
                              v-model="item.duration"
                              label="Duración*"
                              required
                              color="blue"
                              variant="outlined"
                              :counter="5"
                              :maxlength="5"
                              prefix="N días"
                              :rules="[...validations.fieldNumberInteger]"
                            ></v-text-field>
                          </v-col>
    
                          <v-col cols="12" sm="12" md="6">
                            <v-text-field
                              v-model="item.price"
                              label="Precio*"
                              required
                              color="blue"
                              variant="outlined"
                              :counter="5"
                              :maxlength="5"
                              prefix="S/"
                              :rules="[...validations.fieldNumberDouble]"
                            ></v-text-field>
                          </v-col>
    
                          <v-col cols="12" sm="12">
                            <v-textarea
                              v-model="item.description"
                              label="Descripción"
                              variant="outlined"
                              color="blue"
                              :counter="200"
                              :maxlength="200"
                            ></v-textarea>
                          </v-col>

                          <v-col cols="12" sm="12">
                            <v-card-text class="text-center">
                              <v-spacer></v-spacer>

                              <v-btn
                                class="me-1"
                                type="submit"
                                rounded="xl"
                                variant="outlined"
                                color="error"
                                @click="dialog = false"
                              >
                                Cerrar
                              </v-btn>
                              <v-btn
                                class="me-1"
                                type="submit"
                                rounded="xl"
                                variant="outlined"
                                color="primary"
                                @click.prevent="validate()"
                              >
                                Guardar
                              </v-btn>
                            </v-card-text>
                          </v-col>

                        </v-row>
                      </v-form>
                  </v-container>
                </v-card-text>

              </v-card>
            </v-dialog>
          </v-col>
        </v-row>

        <v-row no-gutters >
          <v-col cols="12" sm="12" md="12" class="mb-4 ml-4">
            <v-dialog
              v-model="dialog_history"
              width="auto"
              style="z-index: 1010 !important;"
            >
              <v-card>
                <v-card-title class="text-center pt-5">
                  <span class="text-h5 font-weight-bold"> Historial de renovaciones</span> <br>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-table >
                      <thead>
                        <tr>
                          <th class="text-center text-uppercase" style="width: 20%;">
                            F.R
                          </th>
                          <th class="text-center text-uppercase" style="width: 30%;">
                            Nombre
                          </th>
                          <th class="text-center text-uppercase" style="width: 15%;">
                            Precio
                          </th>
                          <th class="text-center text-uppercase" style="width: 15%;">
                            Inicio
                          </th>
                          <th class="text-center text-uppercase" style="width: 10%;">
                            Días
                          </th>
                          <th class="text-center text-uppercase" style="width: 10%;">
                            Fín
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <template v-if="products_history?.length > 0">
                          <tr
                            v-for="(item) in products_history"
                            :key="item.id"
                          >
                            <td class="text-center"> 
                              <v-chip
                                  class="ma-2"
                                  color="blue-grey-darken-2"
                                  text-color="white"
                                  append-icon="mdi-calendar-range"
                                  size="small"
                                >
                                  {{ item.registration_date_cast }}
                              </v-chip>
                            </td>
                            <td>
                              <div class="text-center">
                                <span class="text-caption v-chip">
                                  <p class="font-weight-medium">
                                    {{ item.name }}
                                  </p>
                                  <p class="font-weight-thin text-caption">
                                    ({{ item.brand }})
                                  </p>
                                </span>
                              </div>
                            </td>
                            <td>
                                <div class="text-center text-caption text-green-lighten-1" >
                                  {{ "S/ "+ (item.price || "0" ) }}
                                </div>
                            </td>
                            <td>
                              <v-chip
                                  class="ma-2"
                                  color="blue-grey-darken-2"
                                  text-color="white"
                                  append-icon="mdi-calendar-range"
                                  size="small"
                                >
                                  {{ item.start_date_cast }}
                              </v-chip>
                            </td>  
                            <td >
                              <div class="text-center text-caption">
                                {{ item.duration }}d
                              </div>
                            </td>
                            <td>
                              <v-chip
                                  class="ma-2"
                                  color="blue-grey-darken-2"
                                  text-color="white"
                                  append-icon="mdi-calendar-range"
                                  size="small"
                                >
                                  {{ item.end_date_cast }}
                              </v-chip>
                            </td>
                          </tr>
                        </template>
                        <template v-else>
                          <tr>
                            <td colspan="7" class="text-center">
                              No hay registros a mostrar
                            </td>
                          </tr>
                        </template>
                      </tbody>
                    </v-table>  
                  </v-container>
                </v-card-text>

              </v-card>
            </v-dialog>
          </v-col>
        </v-row>

        <v-table >
          <thead>
            <tr>
              <template v-if="isMobile">
                <th class="text-center text-uppercase" style="width: 65%;">
                  Producto 
                </th>
                <th class="text-center text-uppercase" style="width: 15%;">
                  Inic/Fín
                </th>
                <th class="text-center text-uppercase" style="width: 10%;">
                  <v-icon icon="mdi-cog"></v-icon>
                </th>
              </template>
              <template v-else>
                <th class="text-center text-uppercase" style="width: 30%;">
                  Nombre
                </th>
                <th class="text-center text-uppercase" style="width: 15%;">
                  Precio
                </th>
                <th class="text-center text-uppercase" style="width: 15%;">
                  Inicio
                </th>
                <th class="text-center text-uppercase" style="width: 10%;">
                  Días
                </th>
                <th class="text-center text-uppercase" style="width: 10%;">
                  Fín
                </th>
                <th class="text-center text-uppercase" style="width: 10%;">
                  Falta
                </th>
                <th class="text-center text-uppercase" style="width: 10%;">
                  Acciones
                </th>
              </template>

            </tr>
          </thead>
          <tbody>
            <template v-if="products?.length > 0">
              <template v-if="isMobile">
                <tr
                  v-for="(item) in products"
                  :key="item.id"
                >
                  <td>
                    <div class="text-center">
                      <span class="text-caption v-chip">
                        <p class="font-weight-medium">
                          {{ item.name }}
                        </p>
                        <p class="font-weight-thin text-caption">
                          ({{ item.brand }})
                        </p>
                      </span>

                      <br>

                      <span class="text-center text-caption">
                        {{  item.duration }}d 
                      </span>

                      <span class="text-center text-caption text-green-lighten-1" >
                        {{ "S/"+ (item.price || "0" ) }}
                      </span>

                      <div style="border: 1px solid">
                        <v-progress-linear
                          :model-value="valueProgress(item)"
                          :color="colorExpirateStatus(item.days_left)"
                          height="25"
                          >
                          <template v-slot:default="{}">
                            <strong>{{ Math.ceil(item.days_left) }}d</strong>
                          </template>
                        </v-progress-linear>
                      </div>
                      <br>
                    </div>
                  </td>

                  <td>
                    <v-chip
                        class="ma-1"
                        color="blue-grey-darken-2"
                        text-color="white"
                        size="small"
                      >
                        {{ item.start_date_cast }} 
                    </v-chip> 
                    <br>
                    <v-chip
                        class="ma-1"
                        color="blue-grey-darken-2"
                        text-color="white"
                        size="small"
                      >
                        {{ item.end_date_cast }}
                    </v-chip>
                  </td>  
                  <td class="text-center"> 
                    <v-row justify="center">
                      <v-menu
                        rounded
                      >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            variant="outlined"
                            color="primary" 
                            v-bind="props"
                            size="x-small"
                          >
                            <v-icon icon="mdi-gesture-double-tap"></v-icon>
                          </v-btn>
                          <v-tooltip
                            activator="parent"
                            location="left"
                          >Acciones</v-tooltip>
                        </template>
                        <v-card>
                          <v-card-text>
                            <div class="mx-auto text-center">
                              <v-btn 
                                variant="outlined"
                                class="text-white m-2 mr-1"
                                color="yellow-accent-4" 
                                size="x-small"
                                @click="editProduct(item.id)">
                                <v-icon icon="mdi-file-edit"></v-icon>
                                <v-tooltip
                                  activator="parent"
                                  location="top"
                                >Editar</v-tooltip>
                              </v-btn>
                              <v-divider class="my-3"></v-divider>
                              <v-btn 
                                variant="outlined"
                                class="text-white m-2 mr-1"
                                color="green-accent-4" 
                                size="x-small"
                                @click="renewProduct(item.id)">
                                <v-icon icon="mdi-rotate-right"></v-icon>
                                <v-tooltip
                                  activator="parent"
                                  location="top"
                                >Renovar</v-tooltip>
                              </v-btn>
                              <v-divider class="my-3"></v-divider>
                              <v-btn 
                                variant="outlined"
                                class="text-white m-2 mr-1"
                                color="blue-lighten-3" 
                                size="x-small"
                                @click="productRenewalHistory(item.id)">
                                <v-icon icon="mdi-clipboard-text"></v-icon>
                                <v-tooltip
                                  activator="parent"
                                  location="top"
                                >Historial de renovación</v-tooltip>
                              </v-btn>
                              <v-divider class="my-3"></v-divider>
                              <v-btn 
                                variant="outlined"
                                color="red-accent-4 m-1" 
                                size="x-small"
                                @click="deleteProduct(item.id)">
                                <v-icon icon="mdi-delete"></v-icon>
                                <v-tooltip
                                  activator="parent"
                                  location="top"
                                >Eliminar</v-tooltip>
                              </v-btn>
                              
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </v-row>
  
                  </td>
                </tr>
              </template>

              <template v-else>
                <tr
                  v-for="(item) in products"
                  :key="item.id"
                >
                  <td>
                    <div class="text-center">
                      <span class="text-caption v-chip">
                        <p class="font-weight-medium">
                          {{ item.name }}
                        </p>
                        <p class="font-weight-thin text-caption">
                          ({{ item.brand }})
                        </p>
                      </span>
                    </div>
                  </td>
                  <td>
                      <div class="text-center text-caption text-green-lighten-1" >
                        {{ "S/ "+ (item.price || "0" ) }}
                      </div>
                  </td>
                  <td>
                    <v-chip
                        class="ma-2"
                        color="blue-grey-darken-2"
                        text-color="white"
                        append-icon="mdi-calendar-range"
                        size="small"
                      >
                        {{ item.start_date_cast }}
                    </v-chip>
                  </td>  
                  <td >
                    <div class="text-center text-caption">
                      {{ item.duration }}d
                    </div>
                  </td>
                  <td>
                    <v-chip
                        class="ma-2"
                        color="blue-grey-darken-2"
                        text-color="white"
                        append-icon="mdi-calendar-range"
                        size="small"
                      >
                        {{ item.end_date_cast }}
                    </v-chip>
                  </td>
                  <td>
                    <div class="text-center text-caption">
                      <v-chip
                        class="ma-2"
                        size="x-small"
                        :color="colorExpirateStatus(item.days_left)"
                        text-color="white">
                        {{ item.days_left }}
                        <v-icon icon="mdi-flag-variant"></v-icon>
                      </v-chip>
                    </div>
                  </td>
                  <td class="text-center"> 
                    <v-row justify="center">
                      <v-menu
                        rounded
                      >
                        <template v-slot:activator="{ props }">
                          <v-btn
                            variant="outlined"
                            color="primary" 
                            v-bind="props"
                            size="x-small"
                          >
                            <v-icon icon="mdi-gesture-double-tap"></v-icon>
                          </v-btn>
                          <v-tooltip
                            activator="parent"
                            location="top"
                          >Acciones</v-tooltip>
                        </template>
                        <v-card>
                          <v-card-text>
                            <div class="mx-auto text-center">
                              <v-btn 
                                variant="outlined"
                                class="text-white m-2 mr-1"
                                color="yellow-accent-4" 
                                size="x-small"
                                @click="editProduct(item.id)">
                                <v-icon icon="mdi-file-edit"></v-icon>
                                <v-tooltip
                                  activator="parent"
                                  location="top"
                                >Editar</v-tooltip>
                              </v-btn>
                              <v-divider class="my-3"></v-divider>
                              <v-btn 
                                variant="outlined"
                                class="text-white m-2 mr-1"
                                color="green-accent-4" 
                                size="x-small"
                                @click="renewProduct(item.id)">
                                <v-icon icon="mdi-rotate-right"></v-icon>
                                <v-tooltip
                                  activator="parent"
                                  location="top"
                                >Renovar</v-tooltip>
                              </v-btn>
                              <v-divider class="my-3"></v-divider>
                              <v-btn 
                                variant="outlined"
                                class="text-white m-2 mr-1"
                                color="blue-lighten-3" 
                                size="x-small"
                                @click="productRenewalHistory(item.id)">
                                <v-icon icon="mdi-clipboard-text"></v-icon>
                                <v-tooltip
                                  activator="parent"
                                  location="top"
                                >Historial de renovación</v-tooltip>
                              </v-btn>
                              <v-divider class="my-3"></v-divider>
                              <v-btn 
                                variant="outlined"
                                color="red-accent-4 m-1" 
                                size="x-small"
                                @click="deleteProduct(item.id)">
                                <v-icon icon="mdi-delete"></v-icon>
                                <v-tooltip
                                  activator="parent"
                                  location="top"
                                >Eliminar</v-tooltip>
                              </v-btn>
                              
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </v-row>
  
                    
  
  
  
  
                  </td>
                </tr>
              </template>
            </template>
            <template v-else>
              <tr>
                <td colspan="7" class="text-center">
                  No hay registros a mostrar
                </td>
              </tr>
            </template>
          </tbody>
        </v-table>       
      </v-card>

    </v-container>

  </v-lazy>
</template>

<script>
import { mapState } from 'vuex'


import { db,auth, provider, signInWithPopup } from "../utils/firebase"
// import { collection, getDocs, addDoc, doc, setDoc, updateDoc } from "firebase/firestore"; 
import { collection, getDoc, getDocs, query, where, orderBy, addDoc, doc, updateDoc, deleteDoc , Timestamp } from "firebase/firestore"; 

// Manejar Fechas
import { format, addDays, differenceInDays} from 'date-fns'

// Manejar alertas
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
const $toast = useToast();

// sweetalert2
import Swal from 'sweetalert2'

export default {
    data() {
      return {
        user: null,
        registros: [],

        products: [],
        products_history: [],
        item : {
          id : '',
          name: null,
          brand: null,
          price: null,
          start_date: null,
          duration: null,
          description: null
        },
        action: 'insert',
        dialog: false,
        dialog_history:false,
        sortAscName : true,
        sortAscPrice : true,
        sortAscDaysLeft: true,
        selectedYear: null,
        selectedMonth: null,
        arrayMonth: [
          { id: 1, name: 'Enero' },
          { id: 2, name: 'Febrero' },
          { id: 3, name: 'Marzo' },
          { id: 4, name: 'Abril' },
          { id: 5, name: 'Mayo' },
          { id: 6, name: 'Junio' },
          { id: 7, name: 'Julio' },
          { id: 8, name: 'Agosto' },
          { id: 9, name: 'Septiembre' },
          { id: 10, name: 'Octubre' },
          { id: 11, name: 'Noviembre' },
          { id: 12, name: 'Diciembre' },
        ],
        isMobile: false,
        skill: 20,
      }
    },
    mounted() {
      // auth.onAuthStateChanged((user) => {
      //   if(user){
      //     console.log("Usuario logueado");
      //   }else{
      //     console.log("No logueado");
      //   }
      // });
      // this.addItem();
      // this.updateItem();
      // this.getItems();
      // this.getItem("YAvUaZPcdGXsCEhi2vgE");
      this.getProducts('simple');

      // Verificamos si el ancho de la pantalla es menor que el breakpoint "sm"
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      this.isMobile = isMobile;
    },
    computed: {
      ...mapState('financeStore', ['validations', 'isLoading'])
    },
    methods: {
      authenticationUserGoogle(){
        let data = this
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = this.provider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            data.user = result.user;
            this.getProducts('simple');
            console.log({...data.user});
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = this.provider.credentialFromError(error);
            console.log(errorCode, errorMessage, email);
          });
      },
      closeUserGoogle(){
        this.user = null
        this.resetFilter()
      },
      async getProducts(tipo){
        let q = null 
        let user_id = this.user? this.user.uid : "user_invitado"
        if(tipo == 'simple'){
          q = query(collection(db, "products"), where('user_id', '==', user_id), where("state", "==", "ACTIVE"),orderBy("state"));
        }else if(tipo == 'complete'){
          if(!this.selectedYear || !this.selectedMonth) return $toast.info('Debe seleccionar los filtros')

          let year = this.selectedYear;
          let month = this.selectedMonth;
          q = query(collection(db, "products"), 
                where("user_id", "==", user_id),
                where('start_date', '>=', new Date(year, month - 1, 1)),
                where('start_date', '<=', new Date(year, month, 0)));
        }

        this.products = []
        const querySnapshot = await getDocs(  q );
        querySnapshot.forEach((doc) => {
          console.log(doc);
          let item = doc.data();
          let end_date = addDays(item.start_date.toDate(),item.duration);
          item.id = doc.id;
          item.start_date_cast = this.formatDate(item.start_date.toDate(), 'fecha');
          item.end_date_cast = this.formatDate( end_date, 'fecha' );
          item.days_left = differenceInDays(end_date, new Date());
          this.products.push(item)
        });
      },
      async getProductRenewalHistory(id){
        let q = null 
        let user_id = this.user? this.user.uid : "user_invitado"
        q = query(collection(db, "product_renewal_history"), 
                  where('user_id', '==', user_id), 
                  where('product_id', '==', id), 
                  where("state", "==", "ACTIVE"),
                  orderBy("state")
                  );
        this.products_history = []
        const querySnapshot = await getDocs(  q );
        querySnapshot.forEach((doc) => {
          console.log(doc);
          let item = doc.data();
          let end_date = addDays(item.start_date.toDate(),item.duration);
          item.id = doc.id;
          item.registration_date_cast = this.formatDate(item.registration_date.toDate());
          item.start_date_cast = this.formatDate(item.start_date.toDate(), 'fecha');
          item.end_date_cast = this.formatDate( end_date, 'fecha' );
          this.products_history.push(item)
        });
      },
      async deleteProduct(id){
        try {
          Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Esta accción no podrá ser reversible!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, eliminarlo!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await deleteDoc(doc(db, "products", id));
              this.resetFilter()
              Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado',
                'success'
              )
            }
          })
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },
      async editProduct(id){
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.dialog = true
          this.action = 'update'

          let {brand , name, price, start_date, description, duration} = docSnap.data()
          this.item.id = docSnap.id
          this.item.name = name
          this.item.brand = brand
          this.item.price = price
          this.item.start_date = format(start_date.toDate(), 'yyyy-MM-dd HH:mm')
          this.item.description = description
          this.item.duration = duration

          console.log("Document data:", docSnap.data());
        } else {
          $toast.error('Error al encontrar el registro')
        }
      },
      async renewProduct(id){
        try {
          Swal.fire({
            title: 'Renovación',
            text: "¡Estás apunto de renovar el registro con la fecha de hoy!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, renovarlo!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              const docRef = doc(db, "products", id);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                // Guardar el historial de renovaciones
                let {brand , name, price, start_date, description, duration} = docSnap.data()
                await addDoc(collection(db, "product_renewal_history"), {
                  product_id       : id,
                  name             : name,
                  brand            : brand,
                  duration         : duration,
                  price            : price,
                  start_date       : start_date,
                  registration_date: Timestamp.fromDate(new Date()),
                  state            : "ACTIVE",
                  description      : description,
                  user_id          : this.user? this.user.uid : "user_invitado"
                });

                await updateDoc(docRef, {
                  start_date : Timestamp.fromDate(new Date())
                });

                Swal.fire(
                  'Renovado!',
                  'El registro ha sido renovado',
                  'success'
                )
              } else {
                $toast.error('Error al encontrar el registro')
              }

              this.resetFilter()
            }
          })
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },
      productRenewalHistory(id){
        this.dialog_history = true
        this.getProductRenewalHistory(id)
      },
      cleanFields(){
        this.item.id = ''
        this.item.name = ''
        this.item.brand = ''
        this.item.price = ''
        this.item.start_date = ''
        this.item.duration = ''
        this.item.description = ''
        this.action = 'insert'
      },
      formatDate(fecha, tipo="fechaHora"){
        if(tipo == "fechaHora") return format(fecha, 'dd/MM/yyyy HH:mm');
        if(tipo == "fecha") return format(fecha, 'dd/MM/yyyy');
      },
      async validate(){
        let {valid} = await this.$refs.form.validate()
        
        if(valid){
          if(this.action == 'insert'){
            try {
              const docRef = await addDoc(collection(db, "products"), {
                name             : this.item.name,
                brand            : this.item.brand,
                duration         : this.item.duration,
                price            : this.item.price,
                start_date       : Timestamp.fromDate(new Date(this.item.start_date)),
                registration_date: Timestamp.fromDate(new Date()),
                state            : "ACTIVE",
                description      : this.item.description,
                user_id          : this.user? this.user.uid : "user_invitado"
              });
              this.dialog = false
              Swal.fire(
                'Guardado!',
                'El registro guardado con éxito',
                'success'
              )
              this.resetFilter()
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }else if(this.action == 'update'){
            try {
              const Ref = doc(db, "products", this.item.id);
              await updateDoc(Ref, {
                name             : this.item.name,
                brand            : this.item.brand,
                duration         : this.item.duration,
                price            : this.item.price,
                start_date       : Timestamp.fromDate(new Date(this.item.start_date)),
                description      : this.item.description,
                user_id          : this.user? this.user.uid : "user_invitado"
              });

              this.dialog = false
              Swal.fire(
                'Guardado!',
                'El registro actualizado con éxito',
                'success'
              )
              this.resetFilter()

            } catch (e) {
              console.error("Error adding document: ", e);
            }


          }


        }
      },
      colorExpirateStatus(days){
        if(days <= 3){
          return "red"
        }else if(days <= 10){
          return "yellow"
        }else{
          return "green"
        }
      },
      totalSpent(){
        return this.products.reduce((acumulador, product) => {
          return acumulador + parseFloat(product.price);
        }, 0);
      },
      sortName(){
        let data = this
        this.products.sort(function(a, b) {
          if(data.sortAscName){
            let nombreA = a.name.toUpperCase(); // Convertir a mayúsculas para ser insensible a mayúsculas/minúsculas
            let nombreB = b.name.toUpperCase();
            
            if (nombreA < nombreB) {
              return -1;
            }
            if (nombreA > nombreB) {
              return 1;
            }
            // Los nombres son iguales
            return 0;
          }else{
            let nombreA = a.name.toUpperCase(); // Convertir a mayúsculas para ser insensible a mayúsculas/minúsculas
            let nombreB = b.name.toUpperCase();
            
            if (nombreA > nombreB) {
              return -1;
            }
            if (nombreA < nombreB) {
              return 1;
            }
            // Los nombres son iguales
            return 0;
          }
        });
        this.sortAscName = !this.sortAscName
      },
      sortPrice(){
        let data = this
        this.products.sort(function(a, b)  {
          if(data.sortAscPrice) {
            return a.price - b.price
          }else{
            return b.price - a.price;
          }
        });
        this.sortAscPrice = !this.sortAscPrice
      },
      sortDaysLeft(){
        let data = this
        this.products.sort(function(a, b)  {
          if(data.sortAscDaysLeft) {
            return a.days_left - b.days_left
          }else{
            return b.days_left - a.days_left;
          }
        });
        this.sortAscDaysLeft = !this.sortAscDaysLeft
      },
      resetFilter(){
        this.getProducts('simple')
        this.selectedYear = null
        this.selectedMonth = null
      },

      async getItems(){
        const q = query(collection(db, "productos"), where("nombre", "!=", "producto bddddddd"),orderBy("nombre", "desc"));
        const querySnapshot = await getDocs(  q );
        querySnapshot.forEach((doc) => {
          this.registros.push(doc.data())
        });
      },
      async getItem(id){
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      },
      async addItem(){
        try {
          const docRef = await addDoc(collection(db, "productos"), {
            nombre: "producto b",
            precio: 44,
            cantidad: 4
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },
      async updateItem(){
        try {
          // Busca en la collection productos, el documento YAvUaZPcdGXsCEhi2vgE y reemplaza todo el documento
          // await setDoc(doc(db, "productos", "YAvUaZPcdGXsCEhi2vgE"), {
          //   nombre: "Javier update",
          //   precio: 55
          // });

          // Busca en la collection productos, el documento YAvUaZPcdGXsCEhi2vgE y actualiza algún campo específico
          const Ref = doc(db, "productos", "YAvUaZPcdGXsCEhi2vgE");
          await updateDoc(Ref, {
            precio: 45
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },
      valueProgress(item){
        if(!item) return 0;

        if(item.days_left <= 0) return 100;

        let dayComplate = item.duration - item.days_left;

        let percentage = (100)*(dayComplate/item.duration);
        return percentage;
      }
    },
    components: {
    }
  }
</script>

<style scoped>

</style>