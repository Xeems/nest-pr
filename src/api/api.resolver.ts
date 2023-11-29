import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApiService } from './api.service';
import { Api } from './entities/api.entity';
import { CreateApiInput } from './dto/create-api.input';
import { UpdateApiInput } from './dto/update-api.input';

@Resolver(() => Api)
export class ApiResolver {
  constructor(private readonly apiService: ApiService) {}

  @Mutation(() => Api)
  createApi(@Args('createApiInput') createApiInput: CreateApiInput) {
    return this.apiService.create(createApiInput);
  }

  @Query(() => [Api], { name: 'api' })
  findAll() {
    return this.apiService.findAll();
  }

  @Query(() => Api, { name: 'api' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.apiService.findOne(id);
  }

  @Mutation(() => Api)
  updateApi(@Args('updateApiInput') updateApiInput: UpdateApiInput) {
    return this.apiService.update(updateApiInput.id, updateApiInput);
  }

  @Mutation(() => Api)
  removeApi(@Args('id', { type: () => Int }) id: number) {
    return this.apiService.remove(id);
  }
}
